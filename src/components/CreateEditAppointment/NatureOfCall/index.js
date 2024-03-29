import { useState } from 'react';

// STYLES
import { Container, Separator } from '../../../styles/Layout.styles';
import { Heading, Text } from '../../../styles/Text.styles';
import { FieldGroup, Label, Radio } from '../../../styles/Form.styles';
import { PrimaryButton, SecondaryButton } from '../../../styles/Button.styles';

const NatureOfCall = ({ businessArea, handleCancelButton, handleFormNextPage }) => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState(businessArea);

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
          value="Banking"
          name="businessArea"
          required
          checked={selectedRadioBtn === 'Banking'}
          onChange={handleRadioClick}
        />
        <Label htmlFor="banking">Banking</Label>
      </FieldGroup>

      <FieldGroup row>
        <Radio
          type="radio"
          id="insurance"
          value="Insurance"
          name="businessArea"
          required
          checked={selectedRadioBtn === 'Insurance'}
          onChange={handleRadioClick}
        />
        <Label htmlFor="insurance">Insurance</Label>
      </FieldGroup>

      <FieldGroup row>
        <Radio
          type="radio"
          id="mortgage"
          value="Mortgage"
          name="businessArea"
          required
          checked={selectedRadioBtn === 'Mortgage'}
          onChange={handleRadioClick}
        />
        <Label htmlFor="mortgage">Mortgage</Label>
      </FieldGroup>

      <FieldGroup row>
        <Radio
          type="radio"
          id="pension"
          value="Pension"
          name="businessArea"
          required
          checked={selectedRadioBtn === 'Pension'}
          onChange={handleRadioClick}
        />
        <Label htmlFor="pension">Pension</Label>
      </FieldGroup>

      <Separator />

      <FieldGroup row>
        <SecondaryButton full onClick={handleCancelButton}>
          Cancel
        </SecondaryButton>

        <PrimaryButton full onClick={() => handleFormNextPage(selectedRadioBtn)}>
          Next
        </PrimaryButton>
      </FieldGroup>
    </Container>
  );
};

export default NatureOfCall;
