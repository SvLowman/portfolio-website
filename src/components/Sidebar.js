import React from "react";
// import styled from "styled-components/macro";
import { Container } from "../components/Container";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <Container>
    <Link to="/">
      <p>🗺 Landing Page</p>
    </Link>
    <Link to="/projects">
      <p>🏗 Projekte</p>
    </Link>
    <Link to="/cv">
      <p>🧶 CV</p>
    </Link>
  </Container>
);

export default Sidebar;
