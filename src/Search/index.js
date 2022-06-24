import { useState } from 'react';
import { searchCustomersAPI } from '../services';

import { Title } from '../common/Text.styles';
import { Layout } from './index.styles';

import SearchForm from './SearchForm';
import Results from './Results';

const Search = () => {
  const [foundCustomers, setFoundCustomers] = useState([]);
  const [numberOfFoundCustomers, setNumberOfFoundCustomers] = useState('start');

  const findCustomers = async (customerSearch) => {
    const customers = await searchCustomersAPI(customerSearch);
    setFoundCustomers(customers);
    setNumberOfFoundCustomers(customers.length);
  };
  return (
    <Layout>
      <Title>Customer search</Title>
      <div></div>
      <SearchForm findCustomers={findCustomers} />
      <div>
        <Results customers={foundCustomers} numberOfFoundCustomers={numberOfFoundCustomers}/>
      </div>
    </Layout>
  );
};

export default Search;
