import styled from 'styled-components';

export const Layout = styled.div`
  width: var(--maxPageWidth);
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 75px 1fr;

  gap: 1rem 1rem;
`