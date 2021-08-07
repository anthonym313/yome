from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo-lition Company', email='demo@yome.io', password='password', street_address='123 Main St.', city_state='Yomeville,Fl', zipcode="12345", phone='555-555-5555', business_phone='1-800-555-DEMO', logo_url='https://lh3.googleusercontent.com/Lrvn0UNYPipdYpUqZTawGvXG5wLogE9BmhgKNHWLSaEaVh1qFMHTNeXond9lu2Vm_872ng=s102' )
    
    db.session.add(demo) 
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
