import React from "react";
import styled from "styled-components/macro";

const SidebarContainer = styled.div`
  border: solid 1px black;
`;

const LandingPage = () => (
  <SidebarContainer>
    <p>Side-</p>
    <p>-bar</p>
    <p>⬅</p>
  </SidebarContainer>
);

export default LandingPage;
