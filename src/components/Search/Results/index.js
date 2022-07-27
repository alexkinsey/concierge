import { useNavigate } from 'react-router-dom';

// COMPONENTS
import ResultCard from './ResultCard';
import InfoWarningCard from '../../common/InfoWarningCard';

// STYLES
import { Heading } from '../../../styles/Text.styles';
import { Container } from '../../../styles/Layout.styles';
import { PrimaryButton } from '../../../styles/Button.styles';

const Results = ({ customers, numberOfFoundCustomers, resetFoundCustomers }) => {
  const navigate = useNavigate();

  const resultCards = customers.map((customer) => {
    return <ResultCard key={customer.customerId} customer={customer} resetFoundCustomers={resetFoundCustomers} />;
  });

  const foundCustomerMessage = `${numberOfFoundCustomers} customer ${
    numberOfFoundCustomers > 1 ? 'records ' : 'record '
  } match your search`;

  const handelCreateCustomerButton = () => {
    resetFoundCustomers();
    navigate('/create-customer');
  };

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
        <PrimaryButton onClick={handelCreateCustomerButton}>Create a new customer record</PrimaryButton>
      )}
    </Container>
  );
};

export default Results;
