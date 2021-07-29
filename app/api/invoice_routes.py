from flask import Blueprint, request, jsonify
from app.models import db,Invoice
from flask_login import current_user, login_required

invoice_routes = Blueprint('invoices', __name__)

@invoice_routes.route('/')
@login_required
def get_all_invoices():
    invoices = Invoice.query.filter((current_user.id == Invoice.business_id)).all()
    return {'invoices':[invoice.to_dict() for invoice in invoices]}