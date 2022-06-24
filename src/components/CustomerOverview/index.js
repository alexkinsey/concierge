import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCustomerById } from '../../services';

import { twoColumnSB } from '../../styles/Layout.styles';
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
    <twoColumnSB>
    <Title>Customer overview</Title>
      <p>{customer.firstName}</p>
      <p>{customer.lastName}</p>
    </twoColumnSB>
  );
};

export default CustomerOverview;
