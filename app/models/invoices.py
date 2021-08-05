from .db import db

class Invoice(db.Model):
    __tablename__ = 'invoices'
    
    id = db.Column(db.Integer, primary_key=True)
    invoice_number = db.Column(db.String(25), nullable=False)
    date = db.Column(db.String(40))
    balance = db.Column(db.Integer, nullable=False)
    business_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    client_id = db.Column(db.Integer, db.ForeignKey('clients.id'))
    
    users = db.relationship('User', back_populates= 'invoices')
    clients = db.relationship('Client', back_populates= 'invoices')
    payments = db.relationship('Payment', back_populates= 'invoices')
    items = db.relationship('Item', back_populates= 'invoices')
    
    def to_dict(self):
        return {
            'id': self.id,
            'invoice_number': self.invoice_number,
            'date': self.date,
            'balance': self.balance,
            'business_id': self.business_id,
            'client_id': self.client_id,
            'clients':self.clients.to_dict(),
            'items':[item.to_dict()for item in self.items],
            
        }