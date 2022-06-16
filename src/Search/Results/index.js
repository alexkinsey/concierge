import CustomerCard from './CustomerCard';

const Results = ({ customers }) => {
  const customerCards = customers.map((customer) => {
    return <CustomerCard customer={customer} />;
  });

  return (
    <>
      <h1>Results</h1>
      {customerCards}
    </>
  );
};

export default Results;
