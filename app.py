import os
import secrets
import string
import firebase_admin
import convertapi
from firebase_admin import credentials, storage
from flask import Flask, Response, render_template, redirect, request, send_from_directory
from uuid import uuid4
from werkzeug.utils import secure_filename
from werkzeug.exceptions import RequestEntityTooLarge
from dotenv import load_dotenv
load_dotenv()

alphabet = string.ascii_letters + string.digits
convertapi.api_secret = 'H2LgxucHyJVVY2DG'

react_folder = 'frontend'
directory= os.getcwd()+ f'/{react_folder}/build/static'

app = Flask(__name__)

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

# @app.route('/')
# def index():
#     return render_template('index.html')

@app.route('/')
def index():
    path= os.getcwd()+ f'/{react_folder}/build'
    print(path)
    return send_from_directory(directory=path,path='index.html')


@app.route('/static/<folder>/<file>')
def css(folder,file):
    path = folder+'/'+file
    return send_from_directory(directory=directory,path=path)


if __name__ == "__main__":
    app.run(debug=True)
