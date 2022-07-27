import { Link } from 'react-router-dom';

// COMPONENTS
import AppointmentCard from './AppointmentCard';
import InfoWarningCard from '../../common/InfoWarningCard';

// STYLES
import { Container, Separator } from '../../../styles/Layout.styles';
import { Heading } from '../../../styles/Text.styles';
import { PrimaryButton } from '../../../styles/Button.styles';

const AppointmentsList = ({ appointments }) => {
  const totalAppointments = appointments.length;

  const appointmentCards = appointments.map((appointment) => {
    return <AppointmentCard key={appointment.appointmentId} appointment={appointment} />;
  });

  return (
    <Container gap={1}>
      <Heading>Appointments</Heading>
      {totalAppointments === 0 && <InfoWarningCard type="info" message="Customer has no appointments" />}
      {appointmentCards}
      <Separator />
      <Link to="create-appointment">
        <PrimaryButton right>Create a new appointment</PrimaryButton>
      </Link>
    </Container>
  );
};

export default AppointmentsList;
