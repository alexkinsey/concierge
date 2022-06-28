import { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, Separator } from '../../../styles/Layout.styles';
import { Heading, Text } from '../../../styles/Text.styles';
import { FieldGroup, Label, Radio } from '../../../styles/Form.styles';
import { PrimaryButton, SecondaryButton } from '../../../styles/Button.styles';

const NatureOfCall = ({ handleFormNextPage }) => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('');

  const handleRadioClick = (ev) => {
    setSelectedRadioBtn(ev.currentTarget.value);
  };

  return (
    <Container gap={1}>
      <Heading>Nature of the appointment</Heading>
      <Text>Which service does the customer require for their appointment?</Text>
      <FieldGroup row>
        <Radio
          type="radio"
          id="banking"
          value="banking"
          name="businessArea"
          required
          checked={selectedRadioBtn === 'banking'}
          onChange={handleRadioClick}
        />
        <Label htmlFor="banking">Banking</Label>
      </FieldGroup>

      <FieldGroup row>
        <Radio
          type="radio"
          id="insurance"
          value="insurance"
          name="businessArea"
          required
          checked={selectedRadioBtn === 'insurance'}
          onChange={handleRadioClick}
        />
        <Label htmlFor="insurance">Insurance</Label>
      </FieldGroup>

      <FieldGroup row>
        <Radio
          type="radio"
          id="mortgage"
          value="mortgage"
          name="businessArea"
          required
          checked={selectedRadioBtn === 'mortgage'}
          onChange={handleRadioClick}
        />
        <Label htmlFor="mortgage">Mortgage</Label>
      </FieldGroup>

      <FieldGroup row>
        <Radio
          type="radio"
          id="pension"
          value="pension"
          name="businessArea"
          required
          checked={selectedRadioBtn === 'pension'}
          onChange={handleRadioClick}
        />
        <Label htmlFor="pension">Pension</Label>
      </FieldGroup>

      <Separator />

      <FieldGroup row>
        <Link to="/">
          <SecondaryButton>Cancel</SecondaryButton>
        </Link>

        {/* BUG - can continue without radio selection */}

        <PrimaryButton full onClick={() => handleFormNextPage(selectedRadioBtn)}>
          Next
        </PrimaryButton>
      </FieldGroup>
    </Container>
  );
};

export default NatureOfCall;
