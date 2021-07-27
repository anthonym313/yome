from .db import db

class Client(db.Model):
    __tablename__ = 'clients'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    email = db.Column(db.String(255), nullable=False)
    street_address = db.Column(db.String(255))
    phone = db.Column(db.String(255))
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    
    users = db.relationship('User', back_populates='clients')
    
    def to_dict(self):
        return{
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'street_address': self.street_address,
            'phone': self.phone,
            'user_id':self.user_id
        }
    
    
    
    