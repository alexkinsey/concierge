import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCustomerById, getAppointmentById } from '../../services';

import { Container, LabelTextLayout, TwoColumnSB } from '../../styles/Layout.styles';
import { Title, Heading, Text, TextLabel } from '../../styles/Text.styles';
import { CustomerDetails } from '../CustomerDetails';

const AppointmentDetails = () => {
  const { customerId, appointmentId } = useParams();
  const [customer, setCustomer] = useState({});
  const [appointment, setAppointment] = useState({});

  useEffect(() => {
    setCustomer(getCustomer(customerId));
    setAppointment(getAppointment(appointmentId));
  }, []);

  const getCustomer = async (id) => {
    const customer = await getCustomerById(id);
    setCustomer(customer);
  };

  const getAppointment = async (id) => {
    const appointment = await getAppointmentById(id);
    setAppointment(appointment);
  };

  return (
    <TwoColumnSB>
      <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Appointment details</Title>
      <CustomerDetails customer={customer} />
      <Container>
        <Heading>{appointment.businessArea}</Heading>
        <LabelTextLayout>
          <TextLabel>Purpose:</TextLabel>
          <Text>{appointment.purpose}</Text>
        </LabelTextLayout>
      </Container>
    </TwoColumnSB>
  );
};

export default AppointmentDetails;
