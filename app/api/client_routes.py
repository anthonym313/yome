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
    """
    This route gets all of the clients that are connected to an single user. It takes the current user's id to filter the client table and returns only the clients tha
    are owned in a 'list' of 'dictionaries'
    """
    clients = Client.query.filter((Client.user_id == current_user.id)).all()
    return jsonify([client.to_dict() for client in clients])

@client_routes.route('/<int:id>')
@login_required
def get_one_client(id):
    """
    This route gets one client by the primary key and return it as the first and only thing in a list.
    """
    client = Client.query.get(id)
    return jsonify([client.to_dict()])

@client_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_client(id):
    """
    Edits a Clients information by finding the client by its PK.
    """
    req = request.get_json()
    client_to_update = Client.query.get(id)
    client_to_update.name = req['name'],
    client_to_update.email = req['email'],
    client_to_update.street_address = req['streetaddress'],
    client_to_update.phone = req['phone'],
    
    db.session.commit()
    return client_to_update.to_dict()    

@client_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_client(id):
    """
    This API brings in a client by its id and deletes the client from the database
    """
    client_to_delete = Client.query.get(id)
    
    db.session.delete(client_to_delete)
    db.session.commit()
    return {'message': 'Client Deleted'}       

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