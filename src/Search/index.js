import { useState } from 'react';
import { searchCustomersAPI } from './services';
import SearchForm from './SearchForm';
import Results from './Results';

const Search = () => {
  const [foundCustomers, setFoundCustomers] = useState([]);

  const findCustomers = async (customerSearch) => {
    const customers = await searchCustomersAPI(customerSearch);
    setFoundCustomers(customers);
  };
  return (
    <>
      <h1>Customer search</h1>
      <SearchForm findCustomers={findCustomers} />
      <Results customers={foundCustomers} />
    </>
  );
};

export default Search;
