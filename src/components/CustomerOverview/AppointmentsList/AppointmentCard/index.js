import { Link } from 'react-router-dom';

import { TextButton } from '../../../../styles/Button.styles';
import { LabelTextLayout } from '../../../../styles/Layout.styles';
import { Text, TextLabel, TextLarger } from '../../../../styles/Text.styles';
import { Box, ButtonAlignments } from './index.styles';

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
        <Text>{appointment.location}</Text>
      </LabelTextLayout>

      <ButtonAlignments>
        <Link to={`appointment-details/${appointment.appointmentId}`}>
          <TextButton>Appointment details &gt; </TextButton>
        </Link>
      </ButtonAlignments>
    </Box>
  );
};

export default AppointmentCard;
