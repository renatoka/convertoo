import os
import secrets
import string
import firebase_admin
# import pythoncom
from docx2pdf import convert
from firebase_admin import credentials, storage
from flask import Flask, Response, send_from_directory, redirect, request
from uuid import uuid4
from werkzeug.utils import secure_filename
from werkzeug.exceptions import RequestEntityTooLarge
from dotenv import load_dotenv
load_dotenv()

alphabet = string.ascii_letters + string.digits

app = Flask(__name__)
app.config["MAX_CONTENT_LENGTH"] = 10 * 1024 * 1024  # 10MB
cred = credentials.Certificate("secret.json")
firebase_admin.initialize_app(cred, {"storageBucket": 'convertme-a0b9f.appspot.com'})
bucket = storage.bucket('convertme-a0b9f.appspot.com')

react_folder = "frontend"
directory = os.getcwd() + f"/{react_folder}/build/static"

@app.route("/", methods=["POST"])
def upload():
    # pythoncom.CoInitialize()
    file = request.files["file"]
    try:
        if file.filename.endswith(".docx"):
            random_string = "".join(secrets.choice(alphabet) for i in range(10))

            file.save(f"./uploads/{secure_filename(file.filename)}")
            convert(
                f"./uploads/{secure_filename(file.filename)}",
                f"./uploads/{secure_filename(file.filename)}.pdf",
            )

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
            return redirect("Not a docx file")

    except RequestEntityTooLarge as e:
        return "File too large. Max file size is 10MB"

    except Exception as e:
        return str(e)
    
@app.route("/")
def index():
    path = os.getcwd() + f"/{react_folder}/build"
    return send_from_directory(directory=path, path="index.html")


@app.route("/static/<folder>/<file>")
def css(folder, file):
    path = folder + "/" + file
    return send_from_directory(directory=directory, path=path)

if __name__ == "__main__":
    app.run()
