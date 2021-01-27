import React from "react";
import styled from "styled-components/macro";

const HeaderContainer = styled.div`
  border: solid 1px black;
`;

const Header = () => (
  <HeaderContainer>
    <h3>Sieh da, ein Header 😺</h3>
  </HeaderContainer>
);

export default Header;
