.system echo "Running create appointments script"

DROP TABLE IF EXISTS appointments;

CREATE TABLE appointments(
    appointmentId INTEGER PRIMARY KEY,
    businessArea VARCHAR(20) NOT NULL,
    purpose TEXT NOT NULL,
    location VARCHAR(15) NOT NULL,
    branch VARCHAR(50),
    date DATE NOT NULL,
    time TIME NOT NULL,
    comments TEXT,
    customerId INTEGER,
    consultantId INTEGER,
    FOREIGN KEY (customerId) REFERENCES customers(customerId),
    FOREIGN KEY (consultantId) REFERENCES consultants(consultantId)
);

.system echo "Appointments table created"
.system echo "------------------------------"