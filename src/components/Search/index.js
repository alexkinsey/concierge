import { Title } from '../../styles/Text.styles';
import { TwoColumn } from '../../styles/Layout.styles';

import SearchForm from './SearchForm';
import Results from './Results';

const Search = ({searchForCustomers, foundCustomers, numberOfFoundCustomers, resetFoundCustomers}) => {
  return (
    <TwoColumn>
      <Title style={{gridColumnStart: '1', gridColumnEnd: '3'}}>Customer search</Title>
      <SearchForm searchForCustomers={searchForCustomers} />
      <div>
        <Results customers={foundCustomers} numberOfFoundCustomers={numberOfFoundCustomers} resetFoundCustomers={resetFoundCustomers}/>
      </div>
    </TwoColumn>
  );
};

export default Search;
