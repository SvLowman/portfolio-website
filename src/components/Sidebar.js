import React from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import portrait from "../assets/portrait.jpg";

const SidebarContainer = styled.div`
  border: solid 1px black;
  position: fixed;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media (orientation: portrait) {
    width: 100%;
    height: 10%;
    position: relative;
  }
`;

const Portrait = styled.img`
  width: 10rem;
  border-radius: 100%;
  @media (orientation: portrait) {
    display: none;
  }
`;

const LinkButtonContainer = styled.div`
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  @media (orientation: portrait) {
    width: 100%;
    flex-direction: row;
    justify-content: space-evenly;
  }
`;

const LinkButton = styled.button`
  border: solid 1px black;
`;

const Sidebar = () => (
  <SidebarContainer>
    <Portrait src={portrait} alt="Portrait" />
    <LinkButtonContainer>
      <Link to="/">
        <LinkButton>🌍 Landing Page</LinkButton>
      </Link>
      <Link to="/projects">
        <LinkButton>🏗 Projekte</LinkButton>
      </Link>
      <Link to="/techstack">
        <LinkButton>🛠 Techstack</LinkButton>
      </Link>
      <Link to="/cv">
        <LinkButton>🧶 CV</LinkButton>
      </Link>
    </LinkButtonContainer>
  </SidebarContainer>
);

export default Sidebar;
