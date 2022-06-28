import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getConsultantsByDepartment } from '../../../services';

import { Heading, TextAccent } from '../../../styles/Text.styles';
import { PrimaryButton, SecondaryButton } from '../../../styles/Button.styles';
import { Container, Separator } from '../../../styles/Layout.styles';
import { FieldGroup, Label, Field, Radio, Selector } from '../../../styles/Form.styles';

const AppointmentDetailsForm = ({ department, handleFormSubmitButton }) => {
  const [purpose, setPurpose] = useState('');
  const [location, setLocation] = useState('');
  const [branch, setBranch] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [comments, setComments] = useState('');
  const [consultants, setConsultants] = useState([]);
  const [consultant, setConsultant] = useState([]);

  useEffect(() => {
    getConsultantsList(department);
  }, [department]);
  const getConsultantsList = async (department) => {
    const consultantsList = await getConsultantsByDepartment(department);
    setConsultants(consultantsList);
  };
  const consultantsList = consultants.map((consultant) => {
    return (
      <option key={consultant.consultantId} value={consultant.consultantId}>
        {consultant.firstName} {consultant.lastName}
      </option>
    );
  });

  const handlePurposeChange = (e) => setPurpose(e.target.value);
  const handleRadioClick = (ev) => {
    setLocation(ev.currentTarget.value);
    if (ev.currentTarget.value === 'phone') {
      setBranch('');
    }
  };
  const handleBranchChange = (e) => setBranch(e.target.value);
  const handleConsultantChange = (e) => setConsultant(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleCommentsChange = (e) => setComments(e.target.value);

  return (
    <Container gap={1}>
      <Heading>Appointment details</Heading>
      <FieldGroup>
        <Label htmlFor="purpose">Purpose</Label>
        <Field type="text" id="purpose" value={purpose} required onChange={handlePurposeChange} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="location">Location</Label>
        <FieldGroup row>
          <Radio
            type="radio"
            id="phone"
            value="phone"
            name="location"
            required
            checked={location === 'phone'}
            onChange={handleRadioClick}
          />
          <Label htmlFor="phone">Phone</Label>
        </FieldGroup>
        <FieldGroup row>
          <Radio
            type="radio"
            id="branch"
            value="branch"
            name="location"
            required
            checked={location === 'branch'}
            onChange={handleRadioClick}
          />
          <Label htmlFor="branch">Branch</Label>
        </FieldGroup>
      </FieldGroup>

      {location === 'branch' && (
        <FieldGroup>
          <Label htmlFor="branch">Branch</Label>
          <Selector id="branch" required onChange={handleBranchChange}>
            <option selected disabled value="Choose a branch...">
              Choose a branch...
            </option>
            <optgroup label="Scotland">
              <option value="Aberdeen">Aberdeen</option>
              <option value="Dundee">Dundee</option>
              <option value="Dunfermline">Dunfermline</option>
              <option value="Edinburgh Princes Street">Edinburgh Princes Street</option>
              <option value="Edinburgh West">Edinburgh West End</option>
              <option value="Glasgow Buchanan Street">Glasgow Buchanan Street</option>
              <option value="Glasgow Merchant City">Glasgow Merchant City</option>
            </optgroup>
            <optgroup label="England">
              <option value="Birmingham New Town">Birmingham New Town</option>
              <option value="Birmingham Stock Field">Birmingham Stock Field</option>
              <option value="Bradford">Bradford</option>
              <option value="Brighton">Brighton</option>
              <option value="Cambridge">Cambridge</option>
              <option value="Coventry">Coventry</option>
              <option value="Leeds">Leeds</option>
              <option value="Liverpool">Liverpool</option>
              <option value="London Clapham">London Clapham</option>
              <option value="London Covent Garden">London Covent Garden</option>
              <option value="London Islington">London Islington</option>
              <option value="London Regent Street">London Regent Street</option>
              <option value="Manchester High Street">Manchester High Street</option>
              <option value="Manchester Piccadilly">Manchester Piccadilly</option>
              <option value="Middlesbrough">Middlesbrough</option>
              <option value="Newcastle">Newcastle</option>
              <option value="Plymouth">Plymouth</option>
              <option value="Reading">Reading</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Southampton">Southampton</option>
            </optgroup>
          </Selector>
        </FieldGroup>
      )}

      <FieldGroup>
        <Label htmlFor="consultant">Consultant</Label>
        <Selector type="text" id="consultant" required onChange={handleConsultantChange}>
          {consultantsList}
        </Selector>
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="date">Date</Label>
        <Field type="date" id="date" value={date} required onChange={handleDateChange} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="time">Time</Label>
        <Field type="time" id="time" min="09:00" max="18:00" value={time} required onChange={handleTimeChange} />
      </FieldGroup>

      <FieldGroup>
        <Label htmlFor="comments">
          Comments <TextAccent>(optional)</TextAccent>
        </Label>
        <Field type="text" id="comments" value={comments} onChange={handleCommentsChange} />
      </FieldGroup>

      <Separator />

      <FieldGroup row>
        <Link to="/">
          <SecondaryButton>Cancel</SecondaryButton>
        </Link>

        <PrimaryButton full onClick={() => handleFormSubmitButton(purpose, location, branch, consultant, date, time, comments)}>
          Add appointment
        </PrimaryButton>
      </FieldGroup>
    </Container>
  );
};

export default AppointmentDetailsForm;
