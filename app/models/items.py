from .db import db

class Item(db.Model):
    __tablename__ = 'items'
    
    id = db.Column(db.Integer, primary_key=True)
    description= db.Column(db.String(1000), nullable= False)
    rate = db.Column(db.Integer, nullable = False)
    quantity = db.Column(db.Integer, nullable= False)
    amount = db.Column(db.Integer, nullable= False)
    invoice_id = db.Column(db.Integer, db.ForeignKey('invoices.id'))
    
    invoices = db.relationship('Invoice', back_populates='items')
    
    def to_dict(self):
        return {
            'id': self.id,
            'description': self.description,
            'rate': self.rate,
            'quantity': self.quantity,
            'amount': self.amount,
            'invoice_id': self.invoice_id,
        }