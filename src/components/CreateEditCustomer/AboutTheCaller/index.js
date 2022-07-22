import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Heading, TextAccent } from '../../../styles/Text.styles';
import { PrimaryButton, SecondaryButton } from '../../../styles/Button.styles';
import { Container, Separator } from '../../../styles/Layout.styles';
import { FieldGroup, Label, Field } from '../../../styles/Form.styles';

const AboutTheCaller = ({ handleFormSubmit, customer, type }) => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(customer?.firstName);
  const [lastName, setLastName] = useState(customer?.lastName);
  const [dateOfBirth, setDateOfBirth] = useState(customer?.dateOfBirth);
  const [address1, setAddress1] = useState(customer?.address1);
  const [address2, setAddress2] = useState(customer?.address2);
  const [address3, setAddress3] = useState(customer?.address3);
  const [city, setCity] = useState(customer?.city);
  const [postcode, setPostcode] = useState(customer?.postcode);
  const [email, setEmail] = useState(customer?.email);
  const [phoneNumber, setPhoneNumber] = useState(customer?.phoneNumber);
  const [nationalInsuranceNo, setNationalInsuranceNo] = useState(customer?.nationalInsuranceNo);

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value);
  const handleAddress1Change = (e) => setAddress1(e.target.value);
  const handleAddress2Change = (e) => setAddress2(e.target.value);
  const handleAddress3Change = (e) => setAddress3(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handlePostcodeChange = (e) => setPostcode(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePhoneNumberChange = (e) => setPhoneNumber(e.target.value);
  const handleNationalInsuranceNoChange = (e) => setNationalInsuranceNo(e.target.value);

  return (
    <Container gap={1}>
      <Heading>About the caller</Heading>
      <FieldGroup>
        <Label htmlFor="firstName">First name</Label>
        <Field type="text" id="firstName" value={firstName} required onChange={handleFirstNameChange} />
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
        <Label htmlFor="address1">Address line 1</Label>
        <Field type="text" id="address1" value={address1} required onChange={handleAddress1Change} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="address2">
          Address line 2 <TextAccent>(optional)</TextAccent>
        </Label>
        <Field type="text" id="address2" value={address2} onChange={handleAddress2Change} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="address3">
          Address line 3 <TextAccent>(optional)</TextAccent>
        </Label>
        <Field type="text" id="address3" value={address3} onChange={handleAddress3Change} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="city">City</Label>
        <Field type="text" id="city" value={city} required onChange={handleCityChange} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="postcode">Postcode</Label>
        <Field type="text" id="postcode" value={postcode} required onChange={handlePostcodeChange} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="email">Email</Label>
        <Field type="email" id="email" value={email} required onChange={handleEmailChange} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="phoneNumber">Phone number</Label>
        <Field type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="phoneNumber" value={phoneNumber} required onChange={handlePhoneNumberChange} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="nationalInsuranceNo">National Insurance Number</Label>
        <Field type="text" id="nationalInsuranceNo" value={nationalInsuranceNo} required onChange={handleNationalInsuranceNoChange} />
      </FieldGroup>

      <Separator />

      <FieldGroup row>
        <SecondaryButton full onClick={() => navigate(-1)}>
          Cancel
        </SecondaryButton>

        <PrimaryButton
          full
          onClick={() =>
            handleFormSubmit(
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
              nationalInsuranceNo,
            )
          }
        >
          {type === 'create' ? 'Add customer' : 'Save changes'}
        </PrimaryButton>
      </FieldGroup>
    </Container>
  );
};

export default AboutTheCaller;
