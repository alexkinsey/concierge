import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { addAppointment, editAppointment } from '../../services';

import AppointmentDetailsForm from './AppointmentDetailsForm';
import NatureOfCall from './NatureOfCall';

import { Form } from '../../styles/Form.styles';
import { TwoColumn } from '../../styles/Layout.styles';
import { Title } from '../../styles/Text.styles';

const CreateEditAppointment = ({ type, appointment }) => {
  const navigate = useNavigate();
  const { customerId, appointmentId } = useParams();

  const [formInputs, setFormInputs] = useState({
    businessArea: appointment?.businessArea,
    purpose: appointment?.purpose,
    location: appointment?.location,
    branch: '',
    date: appointment?.date,
    time: appointment?.time,
    comments: appointment?.comments,
    consultantId: '',
    customerId: customerId,
  });
  const [formPage, setFormPage] = useState(1);

  const handleCancelButton = (e) => {
    e.preventDefault();
    if (type === 'create') {
      navigate(`/customer-overview/${customerId}`);
    } else {
      navigate(`/customer-overview/${appointment.customerId}/appointment-details/${appointment.appointmentId}`);
    }
  };

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
      await editAppointment(formInputs, appointmentId);
      navigate(`/customer-overview/${customerId}/appointment-details/${appointmentId}`);
    }
  };

  return (
    <TwoColumn large>
      {type === 'create' ? (
        <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Create a new appointment</Title>
      ) : (
        <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Edit appointment</Title>
      )}

      <Form onSubmit={handleFormSubmit}>
        {formPage === 1 ? (
          <NatureOfCall
            businessArea={formInputs.businessArea}
            handleCancelButton={handleCancelButton}
            handleFormNextPage={handleFormNextPageButton}
          />
        ) : (
          <AppointmentDetailsForm
            department={formInputs.businessArea}
            appointment={appointment}
            type={type}
            handleCancelButton={handleCancelButton}
            handleFormSubmitButton={handleFormSubmitButton}
          />
        )}
      </Form>
    </TwoColumn>
  );
};

export default CreateEditAppointment;
