from app.models import db, Client

def seed_clients():
    demo = Client(
        name ='Sam John', email='samjohn@email.com',street_address='555 JOHN St.', phone= '123-457-3248', user_id = 1
    )
    client2 = Client(
        name ='City of Yomeville', email='procurement@cityofyome.gov',street_address='1242 south st.', phone= '123-888-5011', user_id = 1
    )
    client3 = Client(
        name ='Alphonse C Sims', email='phonacs@gmail.com',street_address=' 460 Crowfield Road', phone= '602-859-7423', user_id = 1
    )
    client4 = Client(
        name ='Amanda T Lee', email='mandatl@hotmail.com',street_address='3524 Harvest Lane', phone= '417-234-0206', user_id = 1
    )
    client5 = Client(
        name ='Timothy Schmid', email='timbojs@gmail.com',street_address=' 4491 Ingram Street', phone= '937-210-9832', user_id = 1
    )
    client6 = Client(
        name ='Bernards', email='alim@bernards.com',street_address='555 First Street', phone= '818-361-9208', user_id = 1
    )
    client7 = Client(
        name ='Daniele Dolan', email='dani.dolan@hotmail.com',street_address='1044 Blair Court.', phone= ' 660-322-8391', user_id = 1
    )
    client8 = Client(
        name ='Eugene Perry', email='eugene.P1963@email.com',street_address='724 Spring Avenue', phone= '267-773-6423', user_id = 1
    )
    
    
    db.session.add(demo)
    db.session.add(client2)
    db.session.add(client3)
    db.session.add(client4)
    db.session.add(client5)
    db.session.add(client6)
    db.session.add(client7)
    db.session.add(client8)
    
    db.session.commit()
    

def undo_clients():
    db.session.execute('TRUNCATE clients RESTART IDENTITY CASCADE;')
    db.session.commit()