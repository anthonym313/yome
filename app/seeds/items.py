from app.models import db,Item

def seed_items():
    item1=Item(
        description='Rough Framing Basement',rate=525,quantity=1,amount=525,invoice_id=1
    )
    item2=Item(
        description='Complete Basement Finishing',rate=22320,quantity=1,amount=22320,invoice_id=2
    )
    item3=Item(
        description='Material Hauling',rate=325,quantity=10,amount=3250,invoice_id=3
    )
    item4=Item(
        description='Concrete step demolition and replacement',rate=2300,quantity=1,amount=2300,invoice_id=4
    )
    item5=Item(
        description='2nd story deck installation',rate=2175,quantity=1,amount=2175,invoice_id=4
    )
    item6=Item(
        description='Door wall installation',rate=300,quantity=2,amount=600,invoice_id=4
    )
    item7=Item(
        description='HVAC Installation',rate=8500,quantity=1,amount=8500,invoice_id=4
    )
    db.session.add(item1)
    db.session.add(item2)
    db.session.add(item3)
    db.session.add(item4)
    db.session.add(item5)
    db.session.add(item6)
    db.session.add(item7)
    db.sessoin.commit()
    
    
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()