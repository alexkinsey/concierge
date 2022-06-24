import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getAppointments } from '../../../../services';

import { Text, TextLabel, TextLarger } from '../../../../styles/Text.styles';
import { TextButton } from '../../../../styles/Button.styles';
import { Container, ContentsLayout, ButtonAlignments } from './index.styles';

const ResultCard = ({ customer }) => {
  const [numberOfAppointments, setNumberOfAppointments] = useState('');
  useEffect(() => {
    // TODO - BUG useEffect is hit twice on render
    getNumberOfAppointments(customer.customerId);
  }, [customer.customerId]);

  const getNumberOfAppointments = async (customerId) => {
    const appointments = await getAppointments(customerId);
    setNumberOfAppointments(appointments.length);
  };

  const linkToCustomerOverview = "/customer-overview/" + customer.customerId;

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
      <ButtonAlignments>
        <Link to={linkToCustomerOverview}>
          <TextButton>Customer Overview &gt; </TextButton>
        </Link>
      </ButtonAlignments>
    </Container>
  );
};

export default ResultCard;