import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import NatureOfCall from './NatureOfCall';

import { Form } from '../../styles/Form.styles';
import { TwoColumnBS } from '../../styles/Layout.styles';
import { Title } from '../../styles/Text.styles';
import { addAppointment } from '../../services';
import AppointmentDetailsForm from './AppointmentDetailsForm';

const CreateEditAppointment = (type, appointment) => {
  const navigate = useNavigate();
  const { customerId } = useParams();

  console.log('appointment', appointment);

  const [formInputs, setFormInputs] = useState({
    businessArea: appointment?.businessArea,
    purpose: '',
    location: '',
    branch: null,
    date: '',
    time: '',
    comments: '',
    consultantId: '',
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
    await addAppointment(formInputs);
    navigate(`/customer-overview/${customerId}`);
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
          <NatureOfCall handleFormNextPage={handleFormNextPageButton} businessArea={appointment.businessArea} />
        ) : (
          <AppointmentDetailsForm
            department={formInputs.businessArea}
            handleFormSubmitButton={handleFormSubmitButton}
          />
        )}
      </Form>
    </TwoColumnBS>
  );
};

export default CreateEditAppointment;
