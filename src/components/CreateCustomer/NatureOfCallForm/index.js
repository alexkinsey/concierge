import { useState } from 'react';
import { Container } from '../../../styles/Layout.styles';
import { Heading, Text } from '../../../styles/Text.styles';
import { FieldGroup, Label, Radio } from '../../../styles/Form.styles';

const NatureOfCallForm = () => {
  const [selectedRadioBtn, setSelectedRadioBtn] = useState('');
  const isRadioSelected = (value) => {
    return selectedRadioBtn === value;
  };
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
          checked={isRadioSelected('banking')}
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
          checked={isRadioSelected('insurance')}
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
          checked={isRadioSelected('mortgage')}
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
          checked={isRadioSelected('pension')}
          onChange={handleRadioClick}
        />
        <Label htmlFor="pension">Pension</Label>
      </FieldGroup>
    </Container>
  );
};

export default NatureOfCallForm;
