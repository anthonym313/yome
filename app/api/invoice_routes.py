from flask import Blueprint, request, jsonify
from app.models import db,Invoice
from flask_login import current_user, login_required

invoice_routes = Blueprint('invoices', __name__)

@invoice_routes.route('/')
@login_required
def get_all_invoices():
    invoices = Invoice.query.filter((Invoice.business_id == current_user.id)).all()
    return jsonify([invoice.to_dict() for invoice in invoices])

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
    return new_invoice.to_dict()