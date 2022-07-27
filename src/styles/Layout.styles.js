import styled from 'styled-components';

export const GlobalPageWidth = styled.div`
  max-width: var(--maxPageWidth);
  min-width: var(--minPageWidth);
  margin: auto;
  padding: 0 3rem 5rem 3rem;
`;

export const TwoColumn = styled.div`
  max-width: var(--maxPageWidth);
  min-width: var(--minPageWidth);
  margin: auto;

  display: grid;
  grid-template-columns: ${(props) => (props.large ? '2fr 1fr' : '1fr 2fr')};
  grid-template-rows: 75px 1fr;

  gap: 1rem 1rem;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--white);
  height: fit-content;
  padding: 2rem;
  gap: ${(props) => (props.gap ? props.gap + 'rem' : '0rem')};
`;

export const LabelTextLayout = styled.div`
  display: grid;
  grid-template-columns: ${(props) => (props.close ?  '1fr 5fr' : '1.2fr 2fr')};
`;

export const Separator = styled.div`
  width: 100%;
  border-bottom: 1px solid var(--lightGrey);

  margin: 1rem 0;
`;
