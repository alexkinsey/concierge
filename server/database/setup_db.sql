.system echo "------------------------------"
.system echo "Running setup for Concierge databases"
.system echo "------------------------------"

.system echo "Foreign keys ON"
PRAGMA foreign_keys = ON;
.system echo "------------------------------"


.system echo "1 - create customer database"
.read create_customers.sql
.system echo "2 - load customers"
.read load_customers.sql

.system echo "setup complete"
