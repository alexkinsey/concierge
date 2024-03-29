import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 28px;
  color: var(--black);
  font-weight: 500;

  margin: 1.5rem 0 0 0;
  padding: 0;
`;

export const Heading = styled.h2`
  font-size: 22px;
  color: var(--black);
  font-weight: 500;

  margin: 0 0 0 0;
  padding: 0;
`;

export const Text = styled.p`
  font-size: 15px;
  color: var(--darkGrey);
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
  font-size: 18px;
  font-weight: 600;
`;

export const TextAccent = styled.span`
  color: var(--accent);
`;
