import { Link } from 'react-router-dom';

import ResultCard from './ResultCard';
import InfoCard from './InfoCard';

import { Heading } from '../../../styles/Text.styles';
import { Container } from '../../../styles/Layout.styles';
import { PrimaryButton } from '../../../styles/Button.styles';

const Results = ({ customers, numberOfFoundCustomers }) => {
  const resultCards = customers.map((customer) => {
    return <ResultCard key={customer.customerId} customer={customer} />;
  });

  return (
    <Container gap={2}>
      <Heading>Results</Heading>
      <InfoCard numberOfFoundCustomers={numberOfFoundCustomers} />
      {resultCards}
      {numberOfFoundCustomers === 0 && (
        <Link to="/create-customer">
          <PrimaryButton>Create a new customer record</PrimaryButton>
        </Link>
      )}
    </Container>
  );
};

export default Results;
