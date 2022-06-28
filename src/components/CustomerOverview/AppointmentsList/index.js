import AppointmentCard from './AppointmentCard';

import { Container, Separator } from '../../../styles/Layout.styles';
import { Heading } from '../../../styles/Text.styles';

const AppointmentsList = ({ appointments }) => {
  const appointmentCards = appointments.map((appointment) => {
    return <AppointmentCard key={appointment.appointmentId} appointment={appointment} />;
  });

  return (
    <Container gap={1}>
      <Heading>Appointments</Heading>
      {appointmentCards}
      <Separator />
    </Container>
  );
};

export default AppointmentsList;
