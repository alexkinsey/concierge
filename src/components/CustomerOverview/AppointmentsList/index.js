import { Link } from 'react-router-dom';

// COMPONENTS
import AppointmentCard from './AppointmentCard';
import InfoWarningCard from '../../common/InfoWarningCard';

// STYLES
import { Container, Separator } from '../../../styles/Layout.styles';
import { Heading } from '../../../styles/Text.styles';
import { PrimaryButton } from '../../../styles/Button.styles';

const AppointmentsList = ({ appointments }) => {
  const pastAppointments = appointments.filter((appointment) => {
    const date = new Date(appointment.date);
    return date < Date.now();
  });
  const upcomingAppointments = appointments.filter((appointment) => {
    const date = new Date(appointment.date);
    return date > Date.now();
  });

  const pastAppointmentCards = pastAppointments.map((appointment) => {
    return <AppointmentCard key={appointment.appointmentId} appointment={appointment} />;
  });
  const upcomingAppointmentCards = upcomingAppointments.map((appointment) => {
    return <AppointmentCard key={appointment.appointmentId} appointment={appointment} />;
  });

  return (
    <Container gap={1}>
      {appointments.length === 0 ? (
        <>
          <Heading>Appointments</Heading>
          <InfoWarningCard type="info" message="Customer has no appointments" />
        </>
      ): upcomingAppointments.length === 0 && (
        <>
          <Heading>Upcoming Appointments</Heading>
          <InfoWarningCard type="info" message="Customer has no upcoming appointments" />
        </>
      )}

      {upcomingAppointments.length > 0 && (
        <>
          <Heading>Upcoming Appointments</Heading>
          {upcomingAppointmentCards}
        </>
      )}
      {pastAppointments.length > 0 && (
        <>
          <Heading>Past Appointments</Heading>
          {pastAppointmentCards}
        </>
      )}
      
      <Separator />

      <Link to="create-appointment">
        <PrimaryButton right>Create a new appointment</PrimaryButton>
      </Link>
    </Container>
  );
};

export default AppointmentsList;
