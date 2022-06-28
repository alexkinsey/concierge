import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getCustomerById, getAppointmentById, getConsultantById } from '../../services';

import { Container, LabelTextLayout, TwoColumnSB } from '../../styles/Layout.styles';
import { Title, Heading, Text, TextLabel } from '../../styles/Text.styles';
import { CustomerDetails } from '../CustomerDetails';

const AppointmentDetails = () => {
  const { customerId, appointmentId } = useParams();
  const [customer, setCustomer] = useState({});
  const [appointment, setAppointment] = useState({});
  const [consultant, setConsult] = useState({});

  useEffect(() => {
    setCustomer(getCustomer(customerId));
    setAppointment(getAppointment(appointmentId));
  }, [appointmentId, customerId]);

  const getCustomer = async (id) => {
    const customer = await getCustomerById(id);
    setCustomer(customer);
  };

  const getAppointment = async (id) => {
    const appointment = await getAppointmentById(id);
    setAppointment(appointment);
    setConsult(getConsultant(appointment.consultantId));
  };

  const getConsultant = async (id) => {
    const consult = await getConsultantById(id);
    setConsult(consult);
  };

  return (
    <TwoColumnSB>
      <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Appointment details</Title>
      <CustomerDetails customer={customer} />
      <Container gap={1.5}>
        <Heading>{appointment.businessArea}</Heading>

        <LabelTextLayout>
          <TextLabel>Purpose:</TextLabel>
          <Text>{appointment.purpose}</Text>
        </LabelTextLayout>

        <LabelTextLayout>
          <TextLabel>Date:</TextLabel>
          <Text>{appointment.date}</Text>
          <TextLabel>Time:</TextLabel>
          <Text>{appointment.time}</Text>
        </LabelTextLayout>

        <LabelTextLayout>
          <TextLabel>Location:</TextLabel>
          <Text>{appointment.location}</Text>
        </LabelTextLayout>

        <LabelTextLayout>
          <TextLabel>Consultant:</TextLabel>
          <Text>
            {consultant.firstName} {consultant.lastName}
          </Text>
        </LabelTextLayout>

        <LabelTextLayout>
          <TextLabel>Comments:</TextLabel>
          <Text>{appointment.comments}</Text>
        </LabelTextLayout>
      </Container>
    </TwoColumnSB>
  );
};

export default AppointmentDetails;
