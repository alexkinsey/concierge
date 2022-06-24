import { Heading } from '../../common/Text.styles';
import { Container } from './index.styles';

import ResultCard from './ResultCard';

const Results = ({ customers }) => {
  const resultCards = customers.map((customer) => {
    return <ResultCard customer={customer} />;
  });

  return (
    <Container>
      <Heading>Results</Heading>
      {customers.length < 1 && <p>Your results will appear here</p>}
      {resultCards}
    </Container>
  );
};

export default Results;
