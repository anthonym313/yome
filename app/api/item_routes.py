from flask import Blueprint, request, jsonify
from app.models import db,Item
from flask_login import current_user, login_required

item_routes = Blueprint('items', __name__)

@item_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_item(id):
    """
    Edits only the item information by finding the item by PK.
    """
    req = request.get_json()
    item_to_update = Item.query.get(id)
    item_to_update.description=req['description'],
    item_to_update.rate = req['rate'],
    item_to_update.quantity = req['quantity'],
    item_to_update.amount = req['amount']
    
    db.session.commit()
    return item_to_update.to_dict()


@item_routes.route('<int:id>', methods=['DELETE'])
@login_required
def delete_item(id):
    item_to_delete = Item.query.get(id)
    db.session.delete(item_to_delete)
    db.session.commit()
    return {'message': 'Item Deleted'}