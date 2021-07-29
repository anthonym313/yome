from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired


class ClientCreationForm(FlaskForm):
    name = StringField('name',validators=[DataRequired()])
    email = StringField('email', validators=[DataRequired()])
    street_address = StringField('street_address', validators=[DataRequired()])
    phone = StringField('phone', validators=[DataRequired()])
    