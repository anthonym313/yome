from .db import db

class Payment(db.Model):
    __tablename__ = 'payments'
    
    id = db.Column(db.Integer, primary_key=True)
    payment_amount = db.Column(db.Integer)
    invoice_id = db.Column(db.Integer, db.ForeignKey('invoices.id'))
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'))
    
    clients = db.relationship('Client', back_populates='payments')
    invoices = db.relationship('Invoice', back_populates = 'payments')
    
    def to_dict(self):
        return {
            'id': self.id,
            'payment_amount': self.payment_amount,
            'invoice_id': self.invoice_id,
            'client_id': self.client_id,
        }