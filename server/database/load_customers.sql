.system echo "Running load customers script"

.mode csv
.import data_customers.csv customers
.mode list

UPDATE customers SET address2 = REPLACE(address2, "\n", NULL) WHERE address2 = "\n";
UPDATE customers SET address3 = REPLACE(address3, "\n", NULL) WHERE address3 = "\n";
UPDATE customers SET national_insurance_number = REPLACE(national_insurance_number, "\n", NULL) WHERE national_insurance_number = "\n";

.system echo "Customers loaded"
.system echo "------------------------------"