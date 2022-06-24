import { Container } from './index.styles';

const CustomerCard = ({ customer }) => {
  return (
    <Container>
      <p>
        {customer.firstName} {customer.lastName}
      </p>
      <p>{customer.dateOfBirth}</p>
      <p>{customer.postcode}</p>
    </Container>
  );
};

export default CustomerCard;
