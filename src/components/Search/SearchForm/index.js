import React, { useState } from 'react';

import { TextAccent } from '../../../styles/Text.styles';
import { PrimaryButton } from '../../../styles/Button.styles';
import { Container } from '../../../styles/Layout.styles';
import { Form, FieldGroup, Label, Field } from '../../../styles/Form.styles';
import { capitaliseFirstLetter, formatPostcode } from '../../common/helpers';

const SearchForm = ({ searchForCustomers }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [postcode, setPostcode] = useState('');

  const handleFirstNameChange = (ev) => setFirstName(capitaliseFirstLetter(ev.target.value));
  const handleLastNameChange = (ev) => setLastName(capitaliseFirstLetter(ev.target.value));
  const handleDateOfBirthChange = (ev) => setDateOfBirth(ev.target.value);
  const handlePostcodeChange = (ev) => setPostcode(formatPostcode(ev.target.value));

  const handleSearch = async (ev) => {
    ev.preventDefault();

    searchForCustomers({
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
          <Label htmlFor="firstName">
            First name <TextAccent>(optional)</TextAccent>
          </Label>
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
          <Label htmlFor="postcode">
            Postcode <TextAccent>(optional)</TextAccent>
          </Label>
          <Field type="text" id="postcode" value={postcode} onChange={handlePostcodeChange} />
        </FieldGroup>

        <PrimaryButton full type="submit" value="Search">
          Search
        </PrimaryButton>
      </Form>
    </Container>
  );
};

export default SearchForm;
