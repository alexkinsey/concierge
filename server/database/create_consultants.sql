.system echo "Running create consultants script"

DROP TABLE IF EXISTS consultants;

CREATE TABLE consultants(
    consultantId INTEGER PRIMARY KEY,
    firstName VARCHAR(25) NOT NULL,
    lastName VARCHAR(25) NOT NULL,
    businessArea VARCHAR(50) NOT NULL
);

.system echo "Consultants table created"
.system echo "------------------------------"