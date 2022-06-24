import styled from 'styled-components';

export const NavBackground = styled.div`
  width: 100%;
  height: 5rem;
  background-color: var(--black);
`;

export const Aligner = styled.div`
  max-width: var(--maxPageWidth);
  min-width: var(--minPageWidth);
  padding: 0 3rem;
  margin: auto;
  height: inherit;
`;

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  height: inherit;
`;

export const Title = styled.div`
  color: var(--white);
  font-family: 'Avenir Next Condensed';
  font-weight: 500;
  font-size: 42px;
`;

export const LogoImage = styled.img`
  height: 75%;
`;
