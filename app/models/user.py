from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    street_address = db.Column(db.String(255))
    city_state = db.Column(db.String(255))
    zipcode = db.Column(db.String(255))
    phone = db.Column(db.String(20))
    business_phone = db.Column(db.String(20))
    logo_url = db.Column(db.String(500))

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'email': self.email,
            'street_address': self.street_address,
            'city_state': self.city_state,
            'zipcode': self.zipcode,
            'phone': self.phone,
            'business_phone': self.business_phone,
            'logo_url': self.logo_url,
        }
