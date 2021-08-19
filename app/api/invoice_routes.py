from flask import Blueprint, request, jsonify
from app.models import db,Invoice,Item
from app.forms import InvoiceCreationForm
from flask_login import current_user, login_required

invoice_routes = Blueprint('invoices', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages


@invoice_routes.route('/')
@login_required
def get_all_invoices():
    invoices = Invoice.query.filter((Invoice.business_id == current_user.id)).all()
    return jsonify([invoice.to_dict() for invoice in invoices])

@invoice_routes.route('/<invoice_number>')
@login_required
def get_one_invoice(invoice_number):
    """
    This route gets one invoice based on the logged in user and the unique invoice_number identifier
    """
    single_invoice = Invoice.query.filter((invoice_number == Invoice.invoice_number)).first()
    return jsonify([single_invoice.to_dict()])

@invoice_routes.route('/new-invoice', methods=['POST'])
@login_required
def create_invoice():
    """
    Creates a new invoice under the current logged in user.
    """
    req =request.get_json()
    new_invoice = Invoice(
        invoice_number=req['invoicenumber'],
        date=req['date'],
        balance=req['balance'],
        business_id=current_user.id,
        client_id = req['clientid'],
    )
    
    db.session.add(new_invoice)
    db.session.commit()
    add_invoice_item(req["arrayOfItems"],new_invoice)
    return new_invoice.to_dict()
   

def add_invoice_item(itemList, new_invoiceId):
    """
    Creates an item that correspondes with the current invoice being made.
    Gets called during invoice creation.
    """
    invoice_items=[]
        
    for item in itemList:
        item = Item(
            description=item['description'],
            rate=item['rate'],
            quantity=item['quantity'],
            amount =item['amount'],
            invoice_id= new_invoiceId.id
        )
        db.session.add(item)
        db.session.commit()
        invoice_items.append(item)
        
    return [item.to_dict() for item in invoice_items]


@invoice_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def edit_invoice(id):
    """
    Edits only the invoice information by finding the invoice by PK.
    """
    req=request.get_json()
    invoice_to_update = Invoice.query.get(id)
    invoice_to_update.invoice_number=req['invoicenumber'],
    invoice_to_update.date=req['date'],
    invoice_to_update.client_id=req['clientid']
   
    db.session.commit()
    return invoice_to_update.to_dict()


@invoice_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_invoice(id):
    invoice_to_delete = Invoice.query.get(id)
    db.session.delete(invoice_to_delete)
    db.session.commit()
    return {'message':'Invoice Deleted'}