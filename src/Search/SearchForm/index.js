import React, { useState } from 'react';

import { Container, FieldGroup } from './index.styles';

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
      <form onSubmit={handleSearch}>
        <FieldGroup>
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
        </FieldGroup>

        <FieldGroup>
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" value={lastName} required onChange={handleLastNameChange} />
        </FieldGroup>

        <FieldGroup>
          <label htmlFor="dateOfBirth">Date of birth:</label>
          <input type="date" id="dateOfBirth" value={dateOfBirth} required onChange={handleDateOfBirthChange} />
        </FieldGroup>

        <FieldGroup>
          <label htmlFor="postcode">Post:</label>
          <input type="text" id="postcode" value={postcode} onChange={handlePostcodeChange} />
        </FieldGroup>

        <input type="submit" value="Search"></input>
      </form>
    </Container>
  );
};

export default SearchForm;
