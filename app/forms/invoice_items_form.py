from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,SubmitField
from wtforms.validators import DataRequired


class InvoiceItemForm(FlaskForm):
    description = StringField('description', validators=[DataRequired()])
    rate = IntegerField('rate', validators=[DataRequired()])
    quantity = IntegerField('quantity',validators=[DataRequired()])
    amount = IntegerField('amount', validators=[DataRequired()])
    submit = SubmitField('submit')
     