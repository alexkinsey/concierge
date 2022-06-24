import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCustomerById } from '../../services';

import { CustomerDetails } from './CustomerDetails/index';

import { TwoColumnSB } from '../../styles/Layout.styles';
import { Title } from '../../styles/Text.styles';

const CustomerOverview = () => {
  const [customer, setCustomer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setCustomer(getCustomer(id));
  }, [id]);

  const getCustomer = async (id) => {
    const customer = await getCustomerById(id);
    setCustomer(customer);
  };

  return (
    <TwoColumnSB>
      <Title>Customer overview</Title>
      <div></div>
      <CustomerDetails customer={customer} />
    </TwoColumnSB>
  );
};

export default CustomerOverview;
