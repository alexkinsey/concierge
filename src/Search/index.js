import { useState } from 'react';

import { searchCustomersAPI } from './services';
import { Layout } from './index.styles';

import SearchForm from './SearchForm';
import Results from './Results';

const Search = () => {
  const [foundCustomers, setFoundCustomers] = useState([]);

  const findCustomers = async (customerSearch) => {
    const customers = await searchCustomersAPI(customerSearch);
    setFoundCustomers(customers);
  };
  return (
    <Layout>
      <h1>Customer search</h1>
      <div></div>
      <SearchForm findCustomers={findCustomers} />
      <div><Results customers={foundCustomers} /></div>
      
    </Layout>
  );
};

export default Search;
