import { Text, TextLarger } from '../../../common/Text.styles';

import { Container, ContentsLayout } from './index.styles';

const CustomerCard = ({ customer }) => {
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
      </ContentsLayout>
    </Container>
  );
};

export default CustomerCard;
