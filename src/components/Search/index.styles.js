import styled from 'styled-components';

export const Layout = styled.div`
  max-width: var(--maxPageWidth);
  min-width: var(--minPageWidth);
  margin: auto;
  padding: 0 3rem;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 75px 1fr;

  gap: 1rem 1rem;
`