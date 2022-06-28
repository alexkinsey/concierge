import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCustomerById, getAppointmentById } from '../../services';

import { Container, TwoColumnSB } from '../../styles/Layout.styles';
import { Title, Heading } from '../../styles/Text.styles';
import { CustomerDetails } from '../CustomerDetails';

const AppointmentDetails = () => {
  const { customerId, appointmentId } = useParams();
  const [customer, setCustomer] = useState({});
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    setCustomer(getCustomer(customerId));
    setAppointment(getAppointment(customerId));
  }, [customerId, appointmentId]);

  const getCustomer = async (customerId) => {
    const customer = await getCustomerById(customerId);
    setCustomer(customer);
  };

  const getAppointment = async (appointmentId) => {
    const appointment = await getAppointmentById(appointmentId);
    setAppointment(appointment);
  };

  return (
    <TwoColumnSB>
      <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Appointment details</Title>
      <CustomerDetails customer={customer} />
      <Container>
        <Heading>{appointment.businessArea}</Heading>
      </Container>
    </TwoColumnSB>
  );
};

export default AppointmentDetails;
