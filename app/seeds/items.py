from app.models import db,Invoice

def seed_items():
    
    db.session.add()
    db.sessoin.commit()
    
    
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()