import React, { useState } from 'react';

import { TextAccent } from '../../common/Text.styles'
import { SubmitButton } from '../../common/Button.styles';
import { Container, Form, FieldGroup, Label, Field } from './index.styles';

const SearchForm = ({ findCustomers }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [postcode, setPostcode] = useState('');

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value);
  const handlePostcodeChange = (e) => setPostcode(e.target.value);

  const handleSearch = async (e) => {
    e.preventDefault();

    findCustomers({
      firstName: firstName,
      lastName: lastName,
      dateOfBirth: dateOfBirth,
      postcode: postcode,
    });
  };

  return (
    <Container>
      <Form onSubmit={handleSearch}>
        <FieldGroup>
          <Label htmlFor="firstName">First name <TextAccent>(optional)</TextAccent></Label>
          <Field type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="lastName">Last name</Label>
          <Field type="text" id="lastName" value={lastName} required onChange={handleLastNameChange} />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="dateOfBirth">Date of birth</Label>
          <Field type="date" id="dateOfBirth" value={dateOfBirth} required onChange={handleDateOfBirthChange} />
        </FieldGroup>

        <FieldGroup>
          <Label htmlFor="postcode">Postcode <TextAccent>(optional)</TextAccent></Label>
          <Field type="text" id="postcode" value={postcode} onChange={handlePostcodeChange} />
        </FieldGroup>

        <SubmitButton type="submit" value="Search"></SubmitButton>
      </Form>
    </Container>
  );
};

export default SearchForm;
