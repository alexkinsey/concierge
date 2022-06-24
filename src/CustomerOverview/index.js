import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCustomerById } from '../services';

const CustomerOverview = () => {
  const [customer, setCustomer] = useState({});
  const { id } = useParams();

  useEffect(() => {
    setCustomer(getCustomer(id));
  }, [id]);

  const getCustomer = async (id) => {
    const customer = await getCustomerById(id);
    setCustomer(customer);
  }

  return (
    <div>
      <p>{customer.firstName}</p>
      <p>{customer.lastName}</p>
    </div>
  );
};

export default CustomerOverview;
