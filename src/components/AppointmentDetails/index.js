import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getCustomerById, getAppointmentById, getConsultantById } from '../../services';

import { CustomerDetails } from '../CustomerDetails';

import { Container, LabelTextLayout, TwoColumnSB } from '../../styles/Layout.styles';
import { Title, Heading, Text, TextLabel } from '../../styles/Text.styles';
import { TextButton } from '../../styles/Button.styles';
import { TextButtonPlacer, HeadingAligner, CommentBox } from './index.styles';

const AppointmentDetails = () => {
  const { customerId, appointmentId } = useParams();
  const [customer, setCustomer] = useState({});
  const [appointment, setAppointment] = useState({});
  const [consultant, setConsult] = useState({});

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const customer = await getCustomerById(customerId);
    setCustomer(customer);

    const appointment = await getAppointmentById(appointmentId);
    setAppointment(appointment);

    const consult = await getConsultantById(appointment.consultantId);
    setConsult(consult);
  };

  return (
    <>
      <TextButtonPlacer>
        <Link to={`/customer-overview/${customerId}`}>
          <TextButton>{'<'} Back to Customer overview</TextButton>
        </Link>
      </TextButtonPlacer>

      <TwoColumnSB>
        <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Appointment details</Title>
        <CustomerDetails customer={customer} />
        <Container gap={1.5}>
          <HeadingAligner>
            <Heading>{appointment.businessArea}</Heading>
            <TextButton>Edit {'>'}</TextButton>
          </HeadingAligner>

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
            {appointment.location === 'branch' && (
              <>
                <TextLabel>Branch:</TextLabel>
                <Text>{appointment.branch}</Text>
              </>
            )}
          </LabelTextLayout>

          <LabelTextLayout>
            <TextLabel>Consultant:</TextLabel>
            <Text>
              {consultant.firstName} {consultant.lastName}
            </Text>
          </LabelTextLayout>

          <TextLabel>Comments:</TextLabel>
          <CommentBox>
            <Text>{!appointment.comments ? 'No comments noted' : appointment.comments}</Text>
          </CommentBox>
        </Container>
      </TwoColumnSB>
    </>
  );
};

export default AppointmentDetails;
