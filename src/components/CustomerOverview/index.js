import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { CustomerDetails } from '../CustomerDetails/index';
import AppointmentsList from './AppointmentsList';

import { TwoColumn } from '../../styles/Layout.styles';
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <TwoColumn>
          <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>
            Customer overview - {customer.firstName} {customer.lastName}
          </Title>
          <CustomerDetails customer={customer} />
          <AppointmentsList appointments={appointments} />
        </TwoColumn>
      )}
    </>
  );
};

export default CustomerOverview;
