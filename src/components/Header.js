import React from "react";
import styled from "styled-components/macro";

const HeaderContainer = styled.div`
  background: var(--brown);
  color: var(--white);
  text-align: center;
  border: solid 1px black;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  h1 {
    font-weight: 700;
  }
  h2 {
    font-weight: 500;
    letter-spacing: 0.4rem;
  }
  @media (orientation: portrait) {
    position: relative;
  }
`;

const Header = () => (
  <HeaderContainer>
    <h1>SVEN LOHMANN</h1>
    <h2>WEB DEVELOPMENT</h2>
  </HeaderContainer>
);

export default Header;
