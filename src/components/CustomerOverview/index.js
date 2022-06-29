import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { CustomerDetails } from '../CustomerDetails/index';

import { TwoColumnSB } from '../../styles/Layout.styles';
import { Title } from '../../styles/Text.styles';

import AppointmentsList from './AppointmentsList';

const CustomerOverview = ({getCustomer, getAppointments, customer, appointments}) => {
  const { customerId } = useParams();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getCustomer(customerId);
    getAppointments(customerId);
    setLoaded(true);
  }, [customerId]);

  return (
    <>
      {loaded && (
        <TwoColumnSB>
          <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>
            Customer overview - {customer.firstName} {customer.lastName}
          </Title>
          <CustomerDetails customer={customer} />
          <AppointmentsList appointments={appointments} />
        </TwoColumnSB>
      )}
    </>
  );
};

export default CustomerOverview;
