import os
import secrets
import string
import firebase_admin
import convertapi
from firebase_admin import credentials, storage
from flask import Flask, Response, render_template, redirect, request
from uuid import uuid4
from werkzeug.utils import secure_filename
from werkzeug.exceptions import RequestEntityTooLarge
from dotenv import load_dotenv
load_dotenv()

alphabet = string.ascii_letters + string.digits
convertapi.api_secret = 'T1x02v0vDiKfbEpk'

app = Flask(
    __name__,
    static_url_path="",
    static_folder="./frontend/build/",
    template_folder="./frontend/build/",
)
app.config["MAX_CONTENT_LENGTH"] = 10 * 1024 * 1024  # 10MB
cred = credentials.Certificate("secret.json")
firebase_admin.initialize_app(cred, {"storageBucket": "convertme-a0b9f.appspot.com"})
bucket = storage.bucket("convertme-a0b9f.appspot.com")

@app.route("/upload", methods=["POST"])
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
            

            blob = bucket.blob(
                f"{secure_filename(random_string)}/{secure_filename(file.filename)}.pdf"
            )

            token = uuid4()
            metadata = {"firebaseStorageDownloadTokens": token}
            blob.metadata = metadata

            blob.upload_from_filename(f"./uploads/{secure_filename(file.filename)}.pdf")
            blob.make_public()

            os.remove(f"./uploads/{secure_filename(file.filename)}")
            os.remove(f"./uploads/{secure_filename(file.filename)}.pdf")

            return redirect(blob.public_url)
        else:
            return Response("File type not supported", status=400)

    except RequestEntityTooLarge as e:
        return "File too large. Max file size is 10MB"

    except Exception as e:
        return str(e)

@app.route('/')
def index():
    return render_template('index.html')

if __name__ == "__main__":
    app.run()
