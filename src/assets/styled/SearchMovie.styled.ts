import styled from 'styled-components';

export const Search = styled.input`
  height: 30px;
  border: none;
  outline: none;
  border-radius: 30px;
  padding: 0 1rem;
  background-color: #2f4550;
  color: #9bbcbc;
  font-weight: 500;
  ::placeholder {
    color: #9bbcbc;
  }
`;
export const PageButton = styled.button`
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.navText};
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.navText};
  outline: none;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 2rem;
  margin-right: 1rem;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  &:disabled {
    opacity: 0.2;
    pointer-events: none;
  }
`;

// const SearchButton = styled.button`
// background-color: transparent;
// border: none;
// outline: none;
// cursor: pointer;
// `
