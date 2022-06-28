import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import AboutTheCaller from './AboutTheCaller';
import NatureOfCallForm from './NatureOfCallForm';

import { Form } from '../../styles/Form.styles';
import { TwoColumnBS } from '../../styles/Layout.styles';
import { Title } from '../../styles/Text.styles';
import { addCustomer } from '../../services';

const CreateCustomer = () => {
  const navigate = useNavigate();
  const [formInputs, setFormInputs] = useState({
    businessArea: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address1: '',
    address2: '',
    address3: '',
    city: '',
    postcode: '',
    email: '',
    phoneNumber: '',
  });
  const [formPage, setFormPage] = useState(1);

  const handleFormNextPageButton = (radio) => {
    setFormInputs({
      ...formInputs,
      businessArea: radio,
    });
    setFormPage(2);
  };

  const handleFormSubmitButton = (
    firstName,
    lastName,
    dateOfBirth,
    address1,
    address2,
    address3,
    city,
    postcode,
    email,
    phoneNumber
  ) => {
    setFormInputs({
      ...formInputs,
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      address1: address1,
      address2: address2,
      address3: address3,
      city: city,
      postcode: postcode,
      email: email,
      phoneNumber: phoneNumber,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const id = await addCustomer(formInputs);
    navigate(`/customer-overview/${id}`);
  };

  return (
    <TwoColumnBS>
      <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Create a new customer record</Title>
      <Form onSubmit={handleFormSubmit}>
        {formPage === 1 ? (
          <NatureOfCallForm handleFormNextPage={handleFormNextPageButton} />
        ) : (
          <AboutTheCaller handleFormSubmit={handleFormSubmitButton} />
        )}
      </Form>
    </TwoColumnBS>
  );
};

export default CreateCustomer;
