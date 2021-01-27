import React from "react";
import styled from "styled-components/macro";

const HeaderContainer = styled.div`
  background: white;
  text-align: center;
  border: solid 1px black;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  @media (orientation: portrait) {
    position: relative;
  }
`;

const Header = () => (
  <HeaderContainer>
    <h1>Sieh da, ein Header 😺</h1>
  </HeaderContainer>
);

export default Header;
