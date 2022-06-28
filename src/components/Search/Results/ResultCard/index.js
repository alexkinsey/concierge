import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAppointmentsByCustomerId } from '../../../../services';

import {LabelTextLayout} from '../../../../styles/Layout.styles';
import { Text, TextLabel, TextLarger } from '../../../../styles/Text.styles';
import { TextButton } from '../../../../styles/Button.styles';
import { Box } from './index.styles';

const ResultCard = ({ customer }) => {
  const [numberOfAppointments, setNumberOfAppointments] = useState('');
  useEffect(() => {
    // BUG - useEffect is hit twice on render
    getNumberOfAppointments(customer.customerId);
  }, [customer.customerId]);

  const getNumberOfAppointments = async (customerId) => {
    const appointments = await getAppointmentsByCustomerId(customerId);
    setNumberOfAppointments(appointments.length);
  };

  const linkToCustomerOverview = "/customer-overview/" + customer.customerId;

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

        <Link to={linkToCustomerOverview}>
          <TextButton right>Customer Overview &gt; </TextButton>
        </Link>
    </Box>
  );
};

export default ResultCard;
