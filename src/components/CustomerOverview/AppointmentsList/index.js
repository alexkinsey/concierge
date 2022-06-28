import { Link } from 'react-router-dom';

import AppointmentCard from './AppointmentCard';
import InfoWarningCard from '../../common/InfoWarningCard';

import { Container, Separator } from '../../../styles/Layout.styles';
import { Heading } from '../../../styles/Text.styles';
import { PrimaryButton } from '../../../styles/Button.styles';

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
      <Link to="create-appointment">
        <PrimaryButton right>Create a new appointment</PrimaryButton>
      </Link>
    </Container>
  );
};

export default AppointmentsList;
