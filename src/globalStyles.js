import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
}
`;

// font-family: 'Montserrat', sans-serif;
// font-weight: 400 (running text) / 500 (smaller titles) / 700 (titles) / 800 (small category caption);

export default GlobalStyle;
