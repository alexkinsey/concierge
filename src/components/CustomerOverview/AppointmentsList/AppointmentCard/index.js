import { Link } from 'react-router-dom';

import { capitaliseFirstLetter } from '../../../common/helpers';

import { TextButton } from '../../../../styles/Button.styles';
import { LabelTextLayout } from '../../../../styles/Layout.styles';
import { Text, TextLabel, TextLarger } from '../../../../styles/Text.styles';
import { Box } from './index.styles';

const AppointmentCard = ({ appointment }) => {
  return (
    <Box>
      <TextLarger>
        {appointment.businessArea}: {appointment.purpose}
      </TextLarger>
      <LabelTextLayout>
        <TextLabel>Date:</TextLabel>
        <Text>{appointment.date}</Text>
        <TextLabel>Time:</TextLabel>
        <Text>{appointment.time}</Text>
        <TextLabel>Location:</TextLabel>
        <Text>{capitaliseFirstLetter(appointment.location)}</Text>
      </LabelTextLayout>

      <Link to={`appointment-details/${appointment.appointmentId}`}>
        <TextButton right>Appointment details &gt; </TextButton>
      </Link>
    </Box>
  );
};

export default AppointmentCard;
