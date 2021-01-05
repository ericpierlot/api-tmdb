import styled from 'styled-components';

export const Wrapper = styled.div<any>`
  display: flex;
  min-height: 100vh;
`;
export const MENUBURGER = styled.span`
  display: none;
  @media (max-width: 840px) {
    display: inline;
    padding: 0.2rem 0.4rem;
    border: 2px solid ${({ theme }) => theme.navText};
    border-radius: 5px;
  }
`;
