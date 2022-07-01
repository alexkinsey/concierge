import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { deleteAppointment } from '../../services';
import { capitaliseFirstLetter } from '../common/helpers';

import { CustomerDetails } from '../CustomerDetails';

import {
  Container,
  LabelTextLayout,
  TwoColumnSB
} from '../../styles/Layout.styles';
import { Title, Heading, Text, TextLabel } from '../../styles/Text.styles';
import { SecondaryButton, TextButton } from '../../styles/Button.styles';
import { TextButtonPlacer, HeadingAligner, TextArea } from './index.styles';

const AppointmentDetails = ({
  getAppointmentData,
  getCustomer,
  appointment,
  customer,
  consultant
}) => {
  const navigate = useNavigate();
  const { customerId, appointmentId } = useParams();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    await getAppointmentData(appointmentId);
    if (!customer.firstName) {
      await getCustomer(customerId);
    }
    setLoaded(true);
  };

  const handleCancelAppointment = async () => {
    deleteAppointment(appointmentId);
    navigate(`/customer-overview/${customerId}`);
  };

  const handleEditButton = () => {
    navigate(
      `/customer-overview/${customer.customerId}/appointment-details/${appointmentId}/edit`
    );
  };

  console.log(appointment);

  return (
    <>
      {loaded && (
        <>
          <TextButtonPlacer>
            <Link to={`/customer-overview/${customerId}`}>
              <TextButton>{'<'} Back to Customer overview</TextButton>
            </Link>
          </TextButtonPlacer>

          <TwoColumnSB>
            <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>
              Appointment details
            </Title>
            <CustomerDetails customer={customer} />
            <Container gap={1.5}>
              <HeadingAligner>
                <Heading>{appointment.businessArea}</Heading>
                <TextButton onClick={handleEditButton}>Edit {'>'}</TextButton>
              </HeadingAligner>

              <LabelTextLayout close>
                <TextLabel>Purpose:</TextLabel>
                <Text>{appointment.purpose}</Text>
              </LabelTextLayout>

              <LabelTextLayout close>
                <TextLabel>Date:</TextLabel>
                <Text>{appointment.date}</Text>
                <TextLabel>Time:</TextLabel>
                <Text>{appointment.time}</Text>
              </LabelTextLayout>

              <LabelTextLayout close>
                <TextLabel>Location:</TextLabel>
                <Text>{capitaliseFirstLetter(appointment.location)}</Text>
                {appointment.location === 'branch' && (
                  <>
                    <TextLabel>Branch:</TextLabel>
                    <Text>{appointment.branch}</Text>
                  </>
                )}
              </LabelTextLayout>

              <LabelTextLayout close>
                <TextLabel>Consultant:</TextLabel>
                <Text>
                  {consultant.firstName} {consultant.lastName}
                </Text>
              </LabelTextLayout>

              <TextLabel>Comments:</TextLabel>
              <TextArea
                rows="10"
                defaultValue={
                  !appointment.comments
                    ? 'No comments noted.'
                    : appointment.comments
                }
              ></TextArea>
              {/* <TextArea rows="10" defaultValue={comment}/> */}
              <SecondaryButton onClick={handleCancelAppointment}>
                Cancel appointment
              </SecondaryButton>
            </Container>
          </TwoColumnSB>
        </>
      )}
    </>
  );
};

export default AppointmentDetails;
