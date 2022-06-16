.system echo "------------------------------"
.system echo "Running setup for Concierge databases"
.system echo "------------------------------"

.system echo "Foreign keys ON"
PRAGMA foreign_keys = ON;
.system echo "------------------------------"


.system echo "1 - create customers database"
.read create_customers.sql
.system echo "2 - load customers"
.read load_customers.sql
.system echo "3 - create consultants database"
.read create_consultants.sql
.system echo "4 - load consultants"
.read load_consultants.sql
.system echo "5 - create appointments database"
.read create_appointments.sql
.system echo "6 - load appointments"
.read load_appointments.sql

.system echo "setup complete"
