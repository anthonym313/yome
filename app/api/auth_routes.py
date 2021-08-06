from flask import Blueprint, jsonify, session, request
from app.models import User, db, user
from app.forms import LoginForm
from app.forms import SignUpForm
from flask_login import current_user, login_user, logout_user, login_required

auth_routes = Blueprint('auth', __name__)


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

@auth_routes.route('/<int:id>/edit',methods=['PUT'])
@login_required
def edit_user(id):
    """
    Edits a logged in User/Business information.
    """
    req=request.get_json()
    user_to_update =User.query.get(id)
    user_to_update.username= req['username'],
    user_to_update.street_address= req['streetaddress'],
    user_to_update.city_state=req['citystate'],
    user_to_update.zipcode=req['zipcode'],
    user_to_update.phone=req['phone'],
    user_to_update.business_phone =req['businessphone'],
    user_to_update.logo_url= req['logourl'],
    
    db.session.commit()
    return user_to_update.to_dict()

@auth_routes.route('/unauthorized')
def unauthorized():
    """
    Returns unauthorized JSON when flask-login authentication fails
    """
    return {'errors': ['Unauthorized']}, 401
