import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 38px;
  color: var(--black);
  font-weight: 500;

  margin: 1rem 0 0 0;
  padding: 0;
`;

export const Heading = styled.h2`
  font-size: 32px;
  color: var(--black);
  font-weight: 500;

  margin: 0;
  padding: 0;
`;

export const Text = styled.p`
  font-size: 18px;
  color: ${(props) => (props.primary ? 'var(--black)' : props.secondary && 'var(--medGrey)')};
  font-weight: 300;

  margin: 0;
  padding: 0;
`;


export const TextLarger = styled(Text)`
  margin: 0 0 0.75em 0;

  font-size: 24px;
  font-weight: 600;
`;

export const TextAccent = styled.span`
  color: var(--accent);
`
