import { useEffect, useState } from 'react';

import { getAppointments } from '../../services';

import { Text, TextLarger } from '../../../common/Text.styles';
import { Container, ContentsLayout } from './index.styles';

const CustomerCard = ({ customer }) => {
  const [numberOfAppointments, setNumberOfAppointments] = useState('');
  useEffect(() => {
    // TODO - BUG useEffect is hit twice on render
    getNumberOfAppointments(customer.customerId)
  }, [customer.customerId]);

  const getNumberOfAppointments = async (customerId) => {
    const appointments = await getAppointments(customerId);
    setNumberOfAppointments(appointments.length)
  }

  return (
    <Container>
      <TextLarger>
        {customer.firstName} {customer.lastName}
      </TextLarger>
      <ContentsLayout>
        <Text primary>Date of birth:</Text>
        <Text secondary>{customer.dateOfBirth}</Text>
        <Text primary>Postcode:</Text>
        <Text secondary>{customer.postcode}</Text>
        <Text primary>Number of appointments:</Text>
        <Text secondary>{numberOfAppointments}</Text>
      </ContentsLayout>
    </Container>
  );
};

export default CustomerCard;
