import styled from 'styled-components';

export const TwoColumnSB = styled.div`
  max-width: var(--maxPageWidth);
  min-width: var(--minPageWidth);
  margin: auto;
  padding: 0 3rem;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 75px 1fr;

  gap: 1rem 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  padding: 2rem;
  gap: ${(props) => (props.gap ? props.gap + 'rem' : '0rem')}
`;

export const LabelTextLayout = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2fr;
`;
