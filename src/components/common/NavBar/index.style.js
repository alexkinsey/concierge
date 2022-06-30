import styled from 'styled-components';

export const NavBackground = styled.div`
  width: 100%;
  height: 4rem;
  background-color: var(--black);
`;

export const Aligner = styled.div`
  max-width: var(--maxPageWidth);
  min-width: var(--minPageWidth);
  padding: 0 3rem;
  margin: auto;
  height: inherit;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;

  height: inherit;
`;

export const Title = styled.div`
  color: var(--white);
  font-family: 'Avenir Next Condensed';
  font-weight: 500;
  font-size: 32px;
  margin-top: 5px;
`;

export const LogoImage = styled.img`
  height: 65%;
`;

export const AccountIcon = styled.svg`
  padding: 0 1rem;
  height: 95%;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
