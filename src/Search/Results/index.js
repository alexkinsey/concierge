import ResultCard from './ResultCard';
import InfoCard from './InfoCard';

import { Heading } from '../../common/Text.styles';
import { Container } from './index.styles';

const Results = ({ customers }) => {
  const resultCards = customers.map((customer) => {
    return <ResultCard customer={customer} />;
  });

  return (
    <Container>
      <Heading>Results</Heading>
      <InfoCard numberOfCustomers={customers.length} />
      {resultCards}
    </Container>
  );
};

export default Results;
