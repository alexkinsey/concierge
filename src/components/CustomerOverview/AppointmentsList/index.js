import AppointmentCard from './AppointmentCard';

import { Container, Separator } from '../../../styles/Layout.styles';
import { Heading } from '../../../styles/Text.styles';
import { PrimaryButton } from '../../../styles/Button.styles';
import InfoWarningCard from '../../common/InfoWarningCard';

const AppointmentsList = ({ appointments }) => {
  var appointmentCards;
  if (appointments.length > 0) {
    appointmentCards = appointments.map((appointment) => {
      return <AppointmentCard key={appointment.appointmentId} appointment={appointment} />;
    });
  }

  return (
    <Container gap={1}>
      <Heading>Appointments</Heading>
      {appointments.length > 0 ? (
        { appointmentCards }
      ) : (
        <InfoWarningCard type="info" message="Customer has no appointments" />
      )}
      <Separator />
      <PrimaryButton right>Create a new appointment</PrimaryButton>
    </Container>
  );
};

export default AppointmentsList;
