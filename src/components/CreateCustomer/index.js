import { useState } from 'react';
import { Form } from '../../styles/Form.styles';
import { TwoColumnBS } from '../../styles/Layout.styles';
import { Title } from '../../styles/Text.styles';
import NatureOfCallForm from './NatureOfCallForm';

const CreateCustomer = () => {
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

  const handleFormNextPage = (radio) => {
    console.log(radio);
    setFormPage(2);
    setFormInputs({
      ...formInputs,
      businessArea: radio,
    });
  };
  return (
    <TwoColumnBS>
      <Title style={{ gridColumnStart: '1', gridColumnEnd: '3' }}>Create a new customer record</Title>
      <Form>
      {formPage === 1 ? (<NatureOfCallForm handleFormNextPage={handleFormNextPage} />) : (null)}
      
      </Form>
    </TwoColumnBS>
  );
};

export default CreateCustomer;
