from flask import Blueprint, request, jsonify
from app.models import db,Client
from flask_login import current_user, login_required

client_routes = Blueprint('clients', __name__)

@client_routes.route('/')
@login_required
def get_all_invoices():
    clients = Client.query.filter((Client.user_id == current_user.id)).all()
    return jsonify([client.to_dict() for client in clients])