.system echo "Running create customer script"

DROP TABLE IF EXISTS customers;

CREATE TABLE customers(
    customer_id INTEGER PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    date_of_birth DATE NOT NULL,
    address1 TEXT NOT NULL,
    address2 TEXT,
    address3 TEXT,
    city TEXT NOT NULL,
    postcode VARCHAR(7) NOT NULL,
    email TEXT NOT NULL,
    phone_number VARCHAR(50) NOT NULL,
    national_insurance_number CHAR(9)
);

.system echo "Customers table created"
.system echo "------------------------------"