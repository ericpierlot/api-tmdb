import styled from 'styled-components';

export const Header = styled.header<any>`
  padding: 1rem 1rem;
  background-color: #2f4550;
  min-width: 250px;
  word-break: break-all;
  img {
    border-radius: 50%;
  }
  @media (max-width: 840px) {
    display: none;
    width: 70%;

    display: ${(props) => (props.render ? 'inline' : 'none')};
  }
`;

export const Navigation = styled.nav`
  ul {
    h3 {
      color: #748f8f;
    }
    margin: auto;
    padding: 1rem 0;
    border-bottom: 1px solid #232323;
  }

  li {
    padding: 0.5rem 0;
    a {
      text-decoration: none;
      font-weight: 500;
    }
  }
`;

export const Button = styled.button`
  border: 0;
  background-color: #9bbcbc;
  color: whitesmoke;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
  &:hover {
    background-color: #b9cccc;
  }
`;
