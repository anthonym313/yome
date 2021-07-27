from app.models import db, Client

def seed_clients():
    demo = Client(
        name ='Sam John', email='samjohn@email.com',street_address='555 JOHN St.', phone= '123-457-3248', user_id = 1
    )
    client2 = Client(
        name ='City of Yomeville', email='procurement@cityofyome.gov',street_address='1242 south st.', phone= '123-888-5011', user_id = 1
    )
    
    
    db.session.add(demo)
    db.session.add(client2)
    db.session.commit()
    

def undo_clients():
    db.session.execute('TRUNCATE invoices RESTART IDENTITY CASCADE;')
    db.session.commit()