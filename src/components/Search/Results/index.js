import ResultCard from './ResultCard';
import InfoCard from './InfoCard';

import { Heading } from '../../../styles/Text.styles';
// import { Container } from './index.styles';
import {Container} from '../../../styles/Layout.styles';

const Results = ({ customers, numberOfFoundCustomers }) => {
  const resultCards = customers.map((customer) => {
    return <ResultCard customer={customer} />;
  });

  return (
    <Container gap={2}>
      <Heading>Results</Heading>
      <InfoCard numberOfFoundCustomers={numberOfFoundCustomers} />
      {resultCards}
    </Container>
  );
};

export default Results;
