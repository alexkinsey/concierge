import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// API call to get appointments by customerId
import { getAppointmentsByCustomerId } from '../../../../services';

// STYLES
import { LabelTextLayout } from '../../../../styles/Layout.styles';
import { Text, TextLabel, TextLarger } from '../../../../styles/Text.styles';
import { TextButton } from '../../../../styles/Button.styles';
import { Box } from './index.styles';

const ResultCard = ({ customer, resetFoundCustomers }) => {
  const navigate = useNavigate();

  const [numberOfAppointments, setNumberOfAppointments] = useState('');

  useEffect(() => {
    getNumberOfAppointments(customer.customerId);
  }, [customer.customerId]);

  const getNumberOfAppointments = async (customerId) => {
    const appointments = await getAppointmentsByCustomerId(customerId);
    setNumberOfAppointments(appointments.length);
  };

  const handelCustomerOverviewButton = () => {
    resetFoundCustomers();
    navigate(`/customer-overview/${customer.customerId}`);
  };

  return (
    <Box>
      <TextLarger>
        {customer.firstName} {customer.lastName}
      </TextLarger>

      <LabelTextLayout>
        <TextLabel>Date of birth:</TextLabel>
        <Text>{customer.dateOfBirth}</Text>
        <TextLabel>Postcode:</TextLabel>
        <Text>{customer.postcode}</Text>
        <TextLabel>Number of appointments:</TextLabel>
        <Text>{numberOfAppointments}</Text>
      </LabelTextLayout>

      <TextButton right onClick={handelCustomerOverviewButton}>
        Customer overview {'>'}
      </TextButton>
    </Box>
  );
};

export default ResultCard;
