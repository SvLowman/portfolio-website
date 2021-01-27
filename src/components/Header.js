import React from "react";
import styled from "styled-components/macro";

const HeaderContainer = styled.div`
  background: white;
  border: solid 1px black;
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
`;

const Header = () => (
  <HeaderContainer>
    <h3>Sieh da, ein Header 😺</h3>
  </HeaderContainer>
);

export default Header;
