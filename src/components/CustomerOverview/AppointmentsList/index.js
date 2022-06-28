import AppointmentCard from './AppointmentCard';

import { Container, Separator } from '../../../styles/Layout.styles';
import { Heading } from '../../../styles/Text.styles';
import { PrimaryButton } from '../../../styles/Button.styles';

const AppointmentsList = ({ appointments }) => {
  const appointmentCards = appointments.map((appointment) => {
    return <AppointmentCard key={appointment.appointmentId} appointment={appointment} />;
  });

  return (
    <Container gap={1}>
      <Heading>Appointments</Heading>
      {appointmentCards}
      <Separator />
      <PrimaryButton right>Create a new appointment</PrimaryButton>
    </Container>
  );
};

export default AppointmentsList;
