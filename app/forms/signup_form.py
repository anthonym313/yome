from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    street_address= StringField('street_address', validators=[DataRequired()])
    city_state = StringField('city_state', validators=[DataRequired()])
    zipcode = StringField('zipcode', validators=[DataRequired()])
    phone = StringField('phone', validators=[DataRequired()])
    business_phone = StringField('business_phone', validators=[DataRequired()])
    logo_url = StringField('logo_url',validators=[DataRequired()])
