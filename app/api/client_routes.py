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
def get_all_clients():
    clients = Client.query.filter((Client.user_id == current_user.id)).all()
    return jsonify([client.to_dict() for client in clients])

@client_routes.route('/<int:id>')
@login_required
def get_one_client(id):
    client = Client.query.get(id)
    return jsonify([client.to_dict()])

@client_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_client(id,):
    """
    Edits a Clients information by finding the client by its PK.
    """
    req = request.get_json()
    print(req)
    client_to_update = Client.query.get(id)
    # client_to_update.name = req['name'],
    # client_to_update.email = req['email'],
    # client_to_update.street_address = req['streetaddress'],
    # client_to_update.phone = req['phone'],
    
    db.session.commit()
    return client_to_update.to_dict()    
    

@client_routes.route('/new-client', methods=['POST'])
@login_required
def create_client():
    """
    Creates a new client under the current logged in user.
    """
    req =request.get_json()
    client = Client(
        name=req['name'],
        email=req['email'],
        street_address=req['streetaddress'],
        phone=req['phone'],
        user_id=current_user.id
    )
    db.session.add(client)
    db.session.commit()
    return client.to_dict()
    