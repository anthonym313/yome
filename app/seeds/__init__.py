from flask.cli import AppGroup
from .users import seed_users, undo_users
from .clients import seed_clients, undo_clients
from .invoices import seed_invoices, undo_invoices
from .items import seed_items,undo_items

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_clients()
    seed_invoices()
    seed_items()
    # Add other seed functions here


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_clients()
    undo_invoices()
    undo_items()
    # Add other undo functions here
