import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

* {

  box-sizing: border-box;
}

ul {
  list-style-type: none;
}
a {
  color: #9bbcbc;
  &:hover {
    color: #b9cccc;
  }
}
body {
  margin:0;
  padding:0;
color: #9bbcbc;
font-family: 'Roboto';
}
`;
