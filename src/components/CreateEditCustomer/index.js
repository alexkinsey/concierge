import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import AboutTheCaller from './AboutTheCaller';

import { Form } from '../../styles/Form.styles';
import { TwoColumnBS } from '../../styles/Layout.styles';
import { Title } from '../../styles/Text.styles';
import { addCustomer, editCustomer } from '../../services';

const CreateEditCustomer = ({ type, customer }) => {
  const navigate = useNavigate();

  const [formInputs, setFormInputs] = useState({
    firstName: customer?.firstName,
    lastName: customer?.lastName,
    dateOfBirth: customer?.dateOfBirth,
    address1: customer?.address1,
    address2: customer?.address2,
    address3: customer?.address3,
    city: customer?.city,
    postcode: customer?.postcode,
    email: customer?.email,
    phoneNumber: customer?.phoneNumber,
    nationalInsuranceNo: customer?.nationalInsuranceNo,
  });

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
    phoneNumber,
    nationalInsuranceNo
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
      nationalInsuranceNo: nationalInsuranceNo,
    });
  };

  const handleFormSubmit = async (ev) => {
    ev.preventDefault();
    if (type === 'create') {
      const id = await addCustomer(formInputs);
      navigate(`/customer-overview/${id}`);
    } else if (type === 'edit') {
      await editCustomer(formInputs, customer.customerId);
      navigate(`/customer-overview/${customer.customerId}`);
    }
  };

  return (
    <TwoColumnBS>
      {type === 'create' ? (
        <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Create a new customer record</Title>
      ) : (
        <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Edit customer record</Title>
      )}

      <Form onSubmit={handleFormSubmit}>
        <AboutTheCaller handleFormSubmit={handleFormSubmitButton} customer={customer} type={type}/>
      </Form>
    </TwoColumnBS>
  );
};

export default CreateEditCustomer;
