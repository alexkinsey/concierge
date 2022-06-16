.system echo "Running create appointments script"

DROP TABLE IF EXISTS appointments;

CREATE TABLE appointments(
    appointmentId INTEGER PRIMARY KEY,
    date DATE NOT NULL,
    time TIME NOT NULL,
    customerId INTEGER,
    consultantId INTEGER,
    FOREIGN KEY (customerId) REFERENCES customers(customerId),
    FOREIGN KEY (consultantId) REFERENCES consultants(consultantId)
);

.system echo "Appointments table created"
.system echo "------------------------------"