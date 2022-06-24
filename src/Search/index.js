import { useState } from 'react';
import { searchCustomersAPI } from '../services';

import { Title } from '../common/Text.styles';
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
      <Title>Customer search</Title>
      <div></div>
      <SearchForm findCustomers={findCustomers} />
      <div>
        <Results customers={foundCustomers} />
      </div>
    </Layout>
  );
};

export default Search;
