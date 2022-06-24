import { useState } from 'react';
import { searchCustomersAPI } from '../../services';

import { Title } from '../../styles/Text.styles';
import { TwoColumnSB } from '../../styles/Layout.styles';

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
    <TwoColumnSB>
      <Title style={{gridColumnStart: '1', gridColumnEnd: '3'}}>Customer search</Title>
      <SearchForm findCustomers={findCustomers} />
      <div>
        <Results customers={foundCustomers} numberOfFoundCustomers={numberOfFoundCustomers} />
      </div>
    </TwoColumnSB>
  );
};

export default Search;
