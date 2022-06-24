import styled from 'styled-components'

export const SubmitButton = styled.input`
  background-color: var(--accent);
  border: none;

  font-size: 28px;
  color: var(--white);
  padding: 1rem;

  :hover{
    cursor: pointer;
    background-color: var(--accentDark);
  }
`