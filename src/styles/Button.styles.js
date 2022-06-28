import styled from 'styled-components';

import { TextLarger } from './Text.styles';

export const TextButton = styled(TextLarger)`
  color: var(--accent);
  margin: 0;
  padding: 0;
`;

export const PrimaryButton = styled.button`
  background-color: var(--accent);
  border: none;

  font-size: 22px;
  font-weight: 500;
  color: var(--white);
  padding: 0 5rem;
  height: 4rem;
  width: ${(props) => (props.full ? '100%' : 'auto')};

  :hover {
    cursor: pointer;
    background-color: var(--accentDark);
  }
`;

export const SecondaryButton = styled.button`
  background-color: white;
  border: 0.15rem solid var(--accent);

  font-size: 22px;
  font-weight: 500;
  color: var(--accent);
  padding: 0 5rem;
  height: 4rem;
  width: ${(props) => (props.full ? '100%' : 'auto')};

  :hover {
    cursor: pointer;
  }
`;