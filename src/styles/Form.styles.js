import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/plain.css';

export const PhoneField = styled(PhoneInput)`
  .form-control {
    width: 27.14rem;
    height: 2.7rem;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? props.row : 'column')};
  gap: 0.25rem;
`;

export const Label = styled.label`
  font-size: 15px;
  color: var(--black);
  font-weight: 500;

  margin: 0;
  padding: 0;
`;

export const Field = styled.input`
  padding: 0.75rem 1rem;
  font-size: 15px;
  color: var(--darkGrey);

  border: 1px solid var(--grey);
  max-width: 25rem;
`;

export const Selector = styled.select`
  padding: 0.75rem 1rem;
  font-size: 15px;
  color: var(--darkGrey);

  border: 1px solid var(--grey);
  max-width: 27.1rem;
`;

export const Radio = styled.input`
  accent-color: var(--accent);
  :checked + ${Label} {
    color: var(--accent);
  }
`;
