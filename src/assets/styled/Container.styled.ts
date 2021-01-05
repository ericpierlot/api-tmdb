import styled from 'styled-components';

export const Main = styled.main`
  background: rgb(73, 80, 82);
  background: linear-gradient(
    139deg,
    rgba(73, 80, 82, 1) 0%,
    rgba(28, 42, 47, 1) 100%
  );
  flex: 1;
  @media (max-width: 840px) {
    overflow: hidden;
  }
`;

export const SectionPage = styled.section`
  padding: 1rem 2rem;
`;
