import { Heading } from '../../common/Text.styles';
import { Container } from './index.styles';

import CustomerCard from './CustomerCard';

const Results = ({ customers }) => {
  const customerCards = customers.map((customer) => {
    return <CustomerCard customer={customer} />;
  });

  return (
    <Container>
      <Heading>Results</Heading>
      {customers.length < 1 && <p>Your results will appear here</p>}
      {customerCards}
    </Container>
  );
};

export default Results;
