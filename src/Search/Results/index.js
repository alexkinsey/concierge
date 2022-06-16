// import { Heading } from '@fpr-public/fpr-ui-component-library'
import CustomerCard from './CustomerCard';

const Results = ({ customers }) => {
  const customerCards = customers.map((customer) => {
    return <CustomerCard customer={customer} />;
  });

  return (
    <>
      {/* <Heading>Results</Heading> */}
      {customers.length < 1 && <p>Your results will appear here</p>}
      {customerCards}
    </>
  );
};

export default Results;
