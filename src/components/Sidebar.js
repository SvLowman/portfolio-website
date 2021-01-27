import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";

const SidebarContainer = styled.div`
  border: solid 1px black;
  position: fixed;
  width: 20%;
  height: 100%;
  padding-top: 4rem;
`;

const Sidebar = () => (
  <SidebarContainer>
    <Link to="/">
      <p>🗺 Landing Page</p>
    </Link>
    <Link to="/projects">
      <p>🏗 Projekte</p>
    </Link>
    <Link to="/cv">
      <p>🧶 CV</p>
    </Link>
  </SidebarContainer>
);

export default Sidebar;
