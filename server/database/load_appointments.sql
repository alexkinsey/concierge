.system echo "Running load appointments script"

.mode csv
.import data_appointments.csv appointments
.mode list

.system echo "Appointments loaded"
.system echo "------------------------------"