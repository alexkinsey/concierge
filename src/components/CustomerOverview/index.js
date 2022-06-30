import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { CustomerDetails } from '../CustomerDetails/index';
import AppointmentsList from './AppointmentsList';

import { TwoColumnSB } from '../../styles/Layout.styles';
import { Title } from '../../styles/Text.styles';
import { TextButton } from '../../styles/Button.styles';
import { TextButtonPlacer } from './index.styles';

const CustomerOverview = ({
  getCustomer,
  getAppointments,
  customer,
  appointments,
  resetData
}) => {
  const { customerId } = useParams();
  const navigate = useNavigate();

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getCustomer(customerId);
    getAppointments(customerId);
    setLoaded(true);
  }, [customerId]);

  const handelBackButton = () => {
    resetData();
    navigate('/');
  };

  return (
    <>
      <TextButtonPlacer>
        <TextButton onClick={handelBackButton}>
          {'<'} Back to Customer search
        </TextButton>
      </TextButtonPlacer>

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
