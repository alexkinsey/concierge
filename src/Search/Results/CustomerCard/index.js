import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAppointments } from '../../services';

import { Text, TextLabel, TextLarger } from '../../../common/Text.styles';
import { TextButton } from '../../../common/Button.styles';
import { Container, ContentsLayout } from './index.styles';

const CustomerCard = ({ customer }) => {
  const [numberOfAppointments, setNumberOfAppointments] = useState('');
  useEffect(() => {
    // TODO - BUG useEffect is hit twice on render
    getNumberOfAppointments(customer.customerId);
  }, [customer.customerId]);

  const getNumberOfAppointments = async (customerId) => {
    const appointments = await getAppointments(customerId);
    setNumberOfAppointments(appointments.length);
  };

  return (
    <Container>
      <TextLarger>
        {customer.firstName} {customer.lastName}
      </TextLarger>
      <ContentsLayout>
        <TextLabel>Date of birth:</TextLabel>
        <Text>{customer.dateOfBirth}</Text>
        <TextLabel>Postcode:</TextLabel>
        <Text>{customer.postcode}</Text>
        <TextLabel>Number of appointments:</TextLabel>
        <Text>{numberOfAppointments}</Text>
      </ContentsLayout>
      <Link to="/customer-overview"><TextButton>Customer Overview &gt; </TextButton></Link>
    </Container>
  );
};

export default CustomerCard;
