.system echo "Running create customer script"

DROP TABLE IF EXISTS customers;

CREATE TABLE customers(
    customerId INTEGER PRIMARY KEY,
    firstName VARCHAR(25) NOT NULL,
    lastName VARCHAR(25) NOT NULL,
    dateOfBirth DATE NOT NULL,
    address1 VARCHAR(80) NOT NULL,
    address2 VARCHAR(80),
    address3 VARCHAR(80),
    city VARCHAR(50) NOT NULL,
    postcode VARCHAR(7) NOT NULL,
    email VARCHAR(50) NOT NULL,
    phoneNumber VARCHAR(15) NOT NULL,
    nationalInsuranceNo CHAR(9)
);

.system echo "Customers table created"
.system echo "------------------------------"