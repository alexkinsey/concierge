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
  font-size: 38px;
  margin-top: 5px;
`;

export const LogoImage = styled.img`
  height: 65%;
`;

export const AccountIcon = styled.svg`
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  border-right: 1px solid rgba(255, 255, 255, 0.3);
  padding: 0 .75rem;
  height: 90%;

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
