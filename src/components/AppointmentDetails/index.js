import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { deleteAppointment } from '../../services';

import { CustomerDetails } from '../CustomerDetails';

import { Container, LabelTextLayout, TwoColumnSB } from '../../styles/Layout.styles';
import { Title, Heading, Text, TextLabel } from '../../styles/Text.styles';
import { SecondaryButton, TextButton } from '../../styles/Button.styles';
import { TextButtonPlacer, HeadingAligner, CommentBox } from './index.styles';

const AppointmentDetails = ({ getAppointment, getConsultant, appointment, customer, consultant }) => {
  const navigate = useNavigate();
  const { customerId, appointmentId } = useParams();

  useEffect(() => {
    getAppointment(appointmentId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCancelAppointment = async () => {
    deleteAppointment(appointmentId);
    navigate(`/customer-overview/${customerId}`);
  };

  console.log('component', consultant);

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
          <SecondaryButton onClick={handleCancelAppointment}>Cancel appointment</SecondaryButton>
        </Container>
      </TwoColumnSB>
    </>
  );
};

export default AppointmentDetails;
