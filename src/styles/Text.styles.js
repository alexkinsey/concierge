import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 32px;
  color: var(--black);
  font-weight: 500;

  margin: 1rem 0 0 0;
  padding: 0;
`;

export const Heading = styled.h2`
  font-size: 26px;
  color: var(--black);
  font-weight: 500;

  margin: 0 0 0 0;
  padding: 0;
`;

export const Text = styled.p`
  font-size: 16px;
  color: var(--medGrey);
  font-weight: 400;

  margin: 0;
  padding: 0;
`;

export const TextLabel = styled(Text)`
  color: var(--black);
  font-weight: 500;
`;

export const TextLarger = styled(Text)`
  margin: ${(props) => (props.noSpace ? '0' : '0 0 0.75em 0')};

  color: var(--black);
  font-size: 22px;
  font-weight: 600;
`;

export const TextAccent = styled.span`
  color: var(--accent);
`;
