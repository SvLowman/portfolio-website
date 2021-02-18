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
  justify-content: center;
  align-items: center;
  @media (orientation: portrait) {
    position: relative;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  h1 {
    font-weight: 700;
    margin-left: 2rem;
    margin-right: 2rem;
  }
  h2 {
    font-weight: 500;
    letter-spacing: 0.4rem;
    margin-left: 2rem;
    margin-right: 2rem;
    @media (orientation: portrait) {
      margin-top: 0;
    }
  }
  @media (orientation: portrait) {
    flex-direction: column;
  }
  @media (max-width: 475px) {
    font-size: small;
  }
`;

const HidingH2 = styled.h2`
  @media (orientation: portrait) {
    display: none;
  }
`;

const Header = () => (
  <HeaderContainer>
    <TitleContainer>
      <h1>SVEN LOHMANN</h1>
      <HidingH2>•</HidingH2>
      <h2>WEB DEVELOPMENT</h2>
    </TitleContainer>
  </HeaderContainer>
);

export default Header;
