import { useNavigate } from 'react-router-dom';

import { Container, LabelTextLayout } from '../../styles/Layout.styles';
import { Heading, TextLabel, Text } from '../../styles/Text.styles';
import { TextButton } from '../../styles/Button.styles';
import { HeadingAligner } from './index.styles';

export const CustomerDetails = ({ customer }) => {
  const navigate = useNavigate();
  const handleEditButton = () => {
    navigate('edit');
  };
  return (
    <Container gap={1.5}>
      <HeadingAligner>
        <Heading>Customer details</Heading>
        <TextButton onClick={handleEditButton}>Edit {'>'}</TextButton>
      </HeadingAligner>
      <LabelTextLayout>
        <TextLabel>First name:</TextLabel>
        <Text>{customer.firstName}</Text>
        <TextLabel>Last name:</TextLabel>
        <Text>{customer.lastName}</Text>
        <TextLabel>Date of birth:</TextLabel>
        <Text>{customer.dateOfBirth}</Text>
      </LabelTextLayout>

      <LabelTextLayout>
        <TextLabel>Address:</TextLabel>
        <Text>{customer.address1}</Text>
        <div></div>
        <Text>{customer.address2}</Text>
        <div></div>
        <Text>{customer.address3}</Text>
        <div></div>
        <Text>{customer.city}</Text>
        <TextLabel>Postcode:</TextLabel>
        <Text>{customer.postcode}</Text>
      </LabelTextLayout>

      <LabelTextLayout>
        <TextLabel>Phone number:</TextLabel>
        <Text>{customer.phoneNumber}</Text>
        <TextLabel>Email:</TextLabel>
        <Text>{customer.email}</Text>
      </LabelTextLayout>
    </Container>
  );
};
