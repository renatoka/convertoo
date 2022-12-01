import os
import secrets
import string
import firebase_admin
import convertapi
from firebase_admin import credentials, storage
from flask import (
    Flask,
    Response,
    render_template,
    redirect,
    request,
)
from flask_cors import CORS, cross_origin
from uuid import uuid4
from werkzeug.utils import secure_filename
from werkzeug.exceptions import RequestEntityTooLarge
from dotenv import load_dotenv

load_dotenv()

alphabet = string.ascii_letters + string.digits
convertapi.api_secret = os.getenv("CONVERT_API_SECRET")

app = Flask(__name__)
CORS(app)

app.template_folder = "frontend/build/templates/"
app.static_folder = "frontend/build/static/"

app.config["MAX_CONTENT_LENGTH"] = 10 * 1024 * 1024  # 10MB
app.config["CORS_HEADERS"] = "Content-Type"
cred = credentials.Certificate("secret.json")
firebase_admin.initialize_app(cred, {"storageBucket": os.getenv("STORAGE_BUCKET")})
bucket = storage.bucket(os.getenv("STORAGE_BUCKET"))


@app.route('/')
@cross_origin()
def index():
    ''' User will call with with thier id to store the symbol as registered'''
    return render_template("index.html")


@app.route("/upload", methods=["POST"])
@cross_origin()
def upload():
    file = request.files["file"]
    try:
        if file.filename.endswith(".docx"):
            random_string = "".join(secrets.choice(alphabet) for i in range(10))

            file.save(f"./uploads/{secure_filename(file.filename)}")

            convertapi.convert(
                "pdf",
                {
                    "File": f"./uploads/{secure_filename(file.filename)}",
                },
                from_format="docx",
            ).save_files(f"./uploads/{random_string}.pdf")

            blob = bucket.blob(f"{random_string}/{random_string}.pdf")

            token = uuid4()
            blob.metadata = {"firebaseStorageDownloadTokens": token}

            blob.upload_from_filename(f"./uploads/{random_string}.pdf")
            blob.make_public()

            os.remove(f"./uploads/{secure_filename(file.filename)}")
            os.remove(f"./uploads/{random_string}.pdf")

            return redirect(blob.public_url)
        else:
            return Response("File type not supported", status=400)

    except RequestEntityTooLarge as e:
        return "File too large. Max file size is 10MB"

    except Exception as e:
        return str(e)

if __name__ == "__main__":
    app.run(debug=True)
