import styled from 'styled-components';

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
  font-size: 16px;
  color: var(--black);
  font-weight: 500;

  margin: 0;
  padding: 0;
`;

export const Field = styled.input`
  padding: 0.75rem 1rem;
  font-size: 16px;
  color: var(--medGrey);

  border: 1px solid var(--black);
  max-width: 25rem;
`;

export const Radio = styled.input`
  accent-color: var(--accent);
  :checked + ${Label} {
    color: var(--accent);
  }
`;
