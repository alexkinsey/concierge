import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import NatureOfCall from '../CreateCustomer/NatureOfCall';

import { Form } from '../../styles/Form.styles';
import { TwoColumnBS } from '../../styles/Layout.styles';
import { Title } from '../../styles/Text.styles';
import { addAppointment } from '../../services';
import AppointmentDetailsForm from './AppointmentDetailsForm';

const CreateAppointment = () => {
  const navigate = useNavigate();
  const { customerId } = useParams();

  const [formInputs, setFormInputs] = useState({
    businessArea: '',
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
      <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Create a new appointment</Title>
      <Form onSubmit={handleFormSubmit}>
        {formPage === 1 ? (
          <NatureOfCall handleFormNextPage={handleFormNextPageButton} />
        ) : (
          <AppointmentDetailsForm department={formInputs.businessArea} handleFormSubmitButton={handleFormSubmitButton}/>
        )}
      </Form>
    </TwoColumnBS>
  );
};

export default CreateAppointment;
