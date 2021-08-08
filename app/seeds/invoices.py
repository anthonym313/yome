from app.models import db, Invoice

def seed_invoices():
    demo = Invoice(
        invoice_number='210101-D', date='Jan 1 2021', balance=525, business_id= 1, client_id = 1
    )
    invoice2 = Invoice(
        invoice_number='210505-D', date='May 5 2021', balance=19096, business_id= 1, client_id = 2
    )
    invoice2 = Invoice(
        invoice_number='210505-D', date='May 5 2021', balance=19096, business_id= 1, client_id = 2
    )
    invoice2 = Invoice(
        invoice_number='210505-D', date='May 5 2021', balance=19096, business_id= 1, client_id = 2
    )
    invoice2 = Invoice(
        invoice_number='210505-D', date='May 5 2021', balance=19096, business_id= 1, client_id = 2
    )
    invoice2 = Invoice(
        invoice_number='210505-D', date='May 5 2021', balance=19096, business_id= 1, client_id = 2
    )
    invoice2 = Invoice(
        invoice_number='210505-D', date='May 5 2021', balance=19096, business_id= 1, client_id = 2
    )
    invoice2 = Invoice(
        invoice_number='210505-D', date='May 5 2021', balance=19096, business_id= 1, client_id = 2
    )
    invoice2 = Invoice(
        invoice_number='210505-D', date='May 5 2021', balance=19096, business_id= 1, client_id = 2
    )
    invoice2 = Invoice(
        invoice_number='210505-D', date='May 5 2021', balance=19096, business_id= 1, client_id = 2
    )
    
    
    db.session.add(demo)
    db.session.add(invoice2)
    db.session.commit()
    

def undo_invoices():
    db.session.execute('TRUNCATE invoices RESTART IDENTITY CASCADE;')
    db.session.commit()