.system echo "Running load consultants script"

.mode csv
.import data_consultants.csv consultants
.mode list

.system echo "Consultants loaded"
.system echo "------------------------------"