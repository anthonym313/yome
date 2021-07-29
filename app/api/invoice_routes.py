from flask import Blueprint, request, jsonify
from app.models import db,Invoice
from flask_login import current_user, login_required

invoice_routes = Blueprint('invoices', __name__)

@invoice_routes.route('/')
@login_required
def get_all_invoices():
    invoices = Invoice.query.filter((Invoice.business_id == current_user.id)).all()
    return jsonify([invoice.to_dict() for invoice in invoices])