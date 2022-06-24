import { Container } from '../../../styles/Layout.styles';
import { Heading, TextLabel, Text } from '../../../styles/Text.styles';
import { TextButton } from '../../../styles/Button.styles';
import { HeadingAligner, ContentsLayout } from './index.styles';

export const CustomerDetails = ({ customer }) => {
  return (
    <Container>
      <HeadingAligner>
        <Heading>Customer details</Heading>
        <TextButton>Edit &gt;</TextButton>
      </HeadingAligner>
      <ContentsLayout>
        <TextLabel>First name:</TextLabel>
        <Text>{customer.firstName}</Text>
        <TextLabel>Last name:</TextLabel>
        <Text>{customer.lastName}</Text>
        <TextLabel>Date of birth:</TextLabel>
        <Text>{customer.dateOfBirth}</Text>
      </ContentsLayout>

      <ContentsLayout>
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
      </ContentsLayout>

      <ContentsLayout>
        <TextLabel>Phone number:</TextLabel>
        <Text>{customer.phoneNumber}</Text>
        <TextLabel>Email:</TextLabel>
        <Text>{customer.email}</Text>
      </ContentsLayout>
    </Container>
  );
};
