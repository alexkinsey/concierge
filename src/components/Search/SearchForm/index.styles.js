import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--white);

  padding: 2rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction:column;
  gap: 1rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
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

  border: 1px solid var(--black);
`;
