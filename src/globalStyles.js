import { createGlobalStyle } from "styled-components/macro";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --background: #151420;
  --bars: #3c312f;
  --darktext: #292929;
  --lighttext: #f9f9f9;
  --buttoncolor: #329eab;
  --grey: #585858;
  --lightgrey: #d5d5d5;
}

body {
  background: var(--background);
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
  margin: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
}
`;

// font-family: 'Montserrat', sans-serif;
// font-weight: 400 (running text) / 500 (smaller titles) / 700 (titles) / 800 (small category caption);

export default GlobalStyle;
