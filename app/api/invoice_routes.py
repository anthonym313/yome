from flask import Blueprint, request, jsonify
from app.models import db,Invoice,Item,Client
from flask_login import current_user, login_required

invoice_routes = Blueprint('invoices', __name__)

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
        
             