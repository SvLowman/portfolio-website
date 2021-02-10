import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --midnightblue: #151420;
  --darkgrey: #292929;
  --brown: #3c312f;
  --grey: #585858;
  --lightgrey: #d5d5d5;
  --white: #f9f9f9;
}

body {
  margin: 0;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}

a {
  text-decoration: none;
}
`;

// font-family: 'Montserrat', sans-serif;
// font-weight: 400 (running text) / 500 (smaller titles) / 700 (titles) / 800 (small category caption);

export default GlobalStyle;
