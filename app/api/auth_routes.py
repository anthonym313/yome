import boto3
import botocore
import uuid
import os
from flask import Blueprint, jsonify, session, request
from app.models import User, db, user
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required
from werkzeug.utils import secure_filename

auth_routes = Blueprint('auth', __name__)

s3 = boto3.client(
    "s3",
    aws_access_key_id=os.environ.get("S3_KEY"),
    aws_secret_access_key=os.environ.get("S3_SECRET")
)

ALLOWED_EXTENSIONS ={'pdf','png','jpg','jpeg'}

def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.',1)[1].lower() in ALLOWED_EXTENSIONS
        

def get_unique_filename(filename):
    ext = filename.rsplit(".", 1)[1].lower()
    unique_filename =uuid.uuid4().hex
    return f"{unique_filename}.{ext}"

BUCKET_NAME = os.environ.get("S3_BUCKET")
S3_LOCATION = f"http://{BUCKET_NAME}.s3.amazonaws.com/"

def upload_file_to_s3(file, acl="public-read"):
    try:
        s3.upload_fileobj(
            file, BUCKET_NAME, file.filename,
            ExtraArgs={
                "ACL": acl,
                "ContentType": file.content_type
            }
        )
    except Exception as e:
        # in case the s3 upload fails
        return {'errors': str(e)}
    
    return {'url':f"{S3_LOCATION}{file.filename}"}


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@auth_routes.route('/')
def authenticate():
    """
    Authenticates a user.
    """
    if current_user.is_authenticated:
        return current_user.to_dict()
    return {'errors': ['Unauthorized']}


@auth_routes.route('/login', methods=['POST'])
def login():
    """
    Logs a user in
    """
    form = LoginForm()
    # Get the csrf_token from the request cookie and put it into the
    # form manually to validate_on_submit can be used
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        # Add the user to the session, we are logged in!
        user = User.query.filter(User.email == form.data['email']).first()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@auth_routes.route('/logout')
def logout():
    """
    Logs a user out
    """
    logout_user()
    return {'message': 'User logged out'}


@auth_routes.route('/signup', methods=['POST'])
def sign_up():
    """
    Creates a new user and logs them in
    """
    form = SignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User(
            username=form.data['username'],
            email=form.data['email'],
            password=form.data['password'],
            street_address=form.data['street_address'],
            city_state=form.data['city_state'],
            zipcode=form.data['zipcode'],
            phone=form.data['phone'],
            business_phone=form.data['business_phone'],
            logo_url=form.data['logo_url']
            
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return user.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401

@auth_routes.route('/edit',methods=['PUT'])
@login_required
def edit_user():
    """
    Edits a logged in User/Business information.
    """
           
    image = request.files['image']
    'this is coming up empty'
    
   
    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"},400
    
    image.filename = get_unique_filename(image.filename)
    
    upload = upload_file_to_s3(image)
    if "url" not in upload:
        """
        if the dict doesn't have a url key
        there was an error when uploading
        we then send back that error message
        """
        return upload, 400
    
    user_to_update =User.query.get(current_user.id)
    user_to_update.username= request['username'],
    user_to_update.street_address= request['streetaddress'],
    user_to_update.city_state=request['citystate'],
    user_to_update.zipcode=request['zipcode'],
    user_to_update.phone=request['phone'],
    user_to_update.business_phone =request['businessphone'],
    user_to_update.logo_url= upload["url"]
    
    
    db.session.commit()
    return user_to_update.to_dict()

@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
