import styled from 'styled-components';

export const Container = styled.div`
  width: inherit;
  padding: 1.5rem;
  background-color: ${(props) => (props.info ? 'var(--info)' : props.warn ? 'var(--warn)' : 'null')};
`;

export const Aligner = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  height: 100%;
`;

