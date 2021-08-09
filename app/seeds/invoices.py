from app.models import db, Invoice

def seed_invoices():
    demo = Invoice(
        invoice_number='170101-R', date='Jan 1 2017', balance=525, business_id= 1, client_id = 1
    )
    invoice2 = Invoice(
        invoice_number='170315-R', date='March 15 2017', balance=22320, business_id= 1, client_id = 3
    )
    invoice3 = Invoice(
        invoice_number='170505-C', date='May 5 2017', balance=3250, business_id= 1, client_id = 6
    )
    invoice4 = Invoice(
        invoice_number='170519-D', date='May 19 2017', balance=13575, business_id= 1, client_id = 2
    )
   
    
    
    db.session.add(demo)
    db.session.add(invoice2)
    db.session.add(invoice3)
    db.session.add(invoice4)
    db.session.commit()
    

def undo_invoices():
    db.session.execute('TRUNCATE invoices RESTART IDENTITY CASCADE;')
    db.session.commit()