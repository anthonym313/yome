from flask import Blueprint, request, jsonify
from app.models import db,Client
from app.forms import ClientCreationForm
from flask_login import current_user, login_required

client_routes = Blueprint('clients', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@client_routes.route('/')
@login_required
def get_all_invoices():
    clients = Client.query.filter((Client.user_id == current_user.id)).all()
    return jsonify([client.to_dict() for client in clients])


@client_routes.route('/new-client', methods=['POST'])
@login_required
def create_client():
    """
    Creates a new client under the current logged in user.
    """
    form = ClientCreationForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        client = Client(
            name=form.data['name'],
            email=form.data['email'],
            street_address=form.data['street_address'],
            phone=form.data['phone'],
            user_id=current_user.id
        )
        db.session.add(client)
        db.session.commit()
        return client.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401