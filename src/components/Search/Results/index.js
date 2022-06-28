import { Link } from 'react-router-dom';

import ResultCard from './ResultCard';
import InfoWarningCard from '../../common/InfoWarningCard';

import { Heading } from '../../../styles/Text.styles';
import { Container } from '../../../styles/Layout.styles';
import { PrimaryButton } from '../../../styles/Button.styles';

const Results = ({ customers, numberOfFoundCustomers }) => {
  const resultCards = customers.map((customer) => {
    return <ResultCard key={customer.customerId} customer={customer} />;
  });

  const foundCustomerMessage = `${numberOfFoundCustomers} customer ${
    numberOfFoundCustomers > 1 ? 'records ' : 'record '
  } match your search`;

  return (
    <Container gap={2}>
      <Heading>Results</Heading>
      {numberOfFoundCustomers === 'start' ? (
        <InfoWarningCard type="info" message="Your results will appear here" />
      ) : numberOfFoundCustomers > 0 ? (
        <InfoWarningCard type="info" message={foundCustomerMessage} />
      ) : (
        <InfoWarningCard type="warning" message="No customer record was found" />
      )}
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
