import styled from 'styled-components'

import {TextLarger} from './Text.styles'

export const SubmitButton = styled.input`
  background-color: var(--accent);
  border: none;

  font-size: 28px;
  font-weight: 500;
  color: var(--white);
  padding: 1rem;

  :hover{
    cursor: pointer;
    background-color: var(--accentDark);
  }
`
export const TextButton = styled(TextLarger)`
  color: var(--accent);
`