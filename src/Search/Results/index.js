import CustomerCard from './CustomerCard';

const Results = ({ customers }) => {
  const customerCards = customers.map((customer) => {
    return <CustomerCard customer={customer} />;
  });

  return (
    <>
      <h1>Results</h1>
      {customers.length < 1 && <p>Your results will appear here</p>}
      {customerCards}
    </>
  );
};

export default Results;
