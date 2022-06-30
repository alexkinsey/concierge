import styled from 'styled-components';

import { TextLarger } from './Text.styles';

// export const TextButton = styled(TextLarger)`
//   color: var(--accent);
//   margin: ${props => props.right? '0 0 0 auto' : '0'};
//   width: fit-content;
//   padding: 0;
// `;

export const TextButton = styled.button`
  display: block;

  color: var(--accent);
  background-color: transparent;
  border: none;
  font-size: 18px;
  font-weight: 600;

  margin: ${(props) => (props.right ? '0 0 0 auto' : '0')};
  width: fit-content;
  padding: 0;

  :hover {
    cursor: pointer;
  }
`;

export const PrimaryButton = styled.button`
  background-color: var(--accent);
  border: none;
  font-size: 18px;
  font-weight: 600;
  color: var(--white);

  padding: 0 5rem;
  height: 4rem;
  width: ${(props) => (props.full ? '100%' : 'fit-content')};
  margin: ${(props) => (props.right ? '0 0 0 auto' : '0')};

  :hover {
    cursor: pointer;
    background-color: var(--accentDark);
  }
`;

export const SecondaryButton = styled.button`
  background-color: white;
  border: 0.15rem solid var(--accent);

  font-size: 18px;
  font-weight: 600;
  color: var(--accent);
  padding: 0 5rem;
  height: 4rem;
  width: ${(props) => (props.full ? '100%' : 'fit-content')};

  :hover {
    cursor: pointer;
  }
`;
