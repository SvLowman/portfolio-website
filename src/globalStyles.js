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
  background: var(--midnightblue);
  margin: 0;
  font-size: 16px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  overflow-x: hidden;
  max-width: 100vw; 
}

a {
  text-decoration: none;
}

button {
  border-radius: 25px;
  letter-spacing: 0.2rem;
  background: transparent;
  padding: 1rem;
  margin: 0.5rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
}
`;

// font-family: 'Montserrat', sans-serif;
// font-weight: 400 (running text) / 500 (smaller titles) / 700 (titles) / 800 (small category caption);

export default GlobalStyle;
