import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { addAppointment, editAppointment } from '../../services';

import AppointmentDetailsForm from './AppointmentDetailsForm';
import NatureOfCall from './NatureOfCall';

import { Form } from '../../styles/Form.styles';
import { TwoColumnBS } from '../../styles/Layout.styles';
import { Title } from '../../styles/Text.styles';

const CreateEditAppointment = ({ type, appointment, consultant }) => {
  const navigate = useNavigate();
  const { customerId, appointmentId } = useParams();

  const [formInputs, setFormInputs] = useState({
    businessArea: '',
    purpose: appointment?.purpose,
    location: appointment?.location,
    branch: appointment?.branch | null,
    date: appointment?.date,
    time: appointment?.time,
    comments: appointment?.comments,
    consultantId: appointment?.consultantId,
    customerId: customerId,
  });
  const [formPage, setFormPage] = useState(1);

  const handleFormNextPageButton = (radio) => {
    if (radio) {
      setFormInputs({
        ...formInputs,
        businessArea: radio,
      });
      setFormPage(2);
    }
  };

  const handleFormSubmitButton = (purpose, location, branch, consultant, date, time, comments) => {
    setFormInputs({
      ...formInputs,
      purpose: purpose,
      location: location,
      branch: branch,
      consultantId: consultant,
      date: date,
      time: time,
      comments: comments,
    });
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    if (type === 'create') {
      await addAppointment(formInputs);
      navigate(`/customer-overview/${customerId}`);
    } else if (type === 'edit') {
      console.log('====================================');
      console.log("formInputs: ", formInputs);
      console.log('====================================');
      await editAppointment(formInputs, appointmentId);
      navigate(`/customer-overview/${customerId}/appointment-details/${appointmentId}`);
    }
  };

  return (
    <TwoColumnBS>
      {type === 'create' ? (
        <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Create a new appointment</Title>
      ) : (
        <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Edit appointment</Title>
      )}

      <Form onSubmit={handleFormSubmit}>
        {formPage === 1 ? (
          <NatureOfCall handleFormNextPage={handleFormNextPageButton} />
        ) : (
          <AppointmentDetailsForm
            department={formInputs.businessArea}
            appointment={appointment}
            handleFormSubmitButton={handleFormSubmitButton}
          />
        )}
      </Form>
    </TwoColumnBS>
  );
};

export default CreateEditAppointment;
