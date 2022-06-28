import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getCustomerById, getAppointmentsByCustomerId } from '../../services';

import { CustomerDetails } from '../CustomerDetails/index';

import { TwoColumnSB } from '../../styles/Layout.styles';
import { Title } from '../../styles/Text.styles';

import AppointmentsList from './AppointmentsList';

const CustomerOverview = () => {
  const [customer, setCustomer] = useState({});
  const [appointments, setAppointments] = useState([]);
  const { customerId } = useParams();

  useEffect(() => {
    setCustomer(getCustomer(customerId));
    setAppointments(getAppointments(customerId));
  }, [customerId]);

  const getCustomer = async (id) => {
    const customer = await getCustomerById(id);
    setCustomer(customer);
  };

  const getAppointments = async (id) => {
    const appointments = await getAppointmentsByCustomerId(id);
    const sortedAppointments = await appointments.sort((a, b) => new Date(b.date) - new Date(a.date));
    setAppointments(sortedAppointments);
  };

  return (
    <TwoColumnSB>
      <Title style={{gridColumnStart: '1', gridColumnEnd: '3'}}>Customer overview - {customer.firstName} {customer.lastName}</Title>
      <CustomerDetails customer={customer} />
      {appointments.length > 0 && <AppointmentsList appointments={appointments} />}
    </TwoColumnSB>
  );
};

export default CustomerOverview;
