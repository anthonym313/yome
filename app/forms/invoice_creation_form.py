from flask_wtf import FlaskForm
from wtforms import StringField,DateField,IntegerField,SubmitField
from wtforms.validators import DataRequired

class InvoiceCreationForm(FlaskForm):
    invoice_number= StringField('invoicenumber', validators=[DataRequired()])
    date = DateField('date', validators=[DataRequired()])
    balance = IntegerField('balance', validators=[DataRequired()])
    business_id = IntegerField('businessid', validators=[DataRequired()])
    client_id = IntegerField('clientid', validators=[DataRequired()])
    submit = SubmitField('Submit')