import React from "react";
import styled from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import portrait from "../assets/portrait-copy.jpg";
import globe from "../assets/sidebar/emoji-weltkarte.png";
import construction from "../assets/sidebar/emoji-baustelle.png";
import cutlery from "../assets/sidebar/emoji-besteck.png";
import ski from "../assets/sidebar/emoji-ski.png";

const SidebarContainer = styled.div`
  background: var(--brown);
  border: solid 1px black;
  position: fixed;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  margin: 1rem;
  @media (orientation: portrait) {
    display: none;
  }
`;

const LinkButtonContainer = styled.div`
  border: solid 1px black;
  margin-top: 3rem;
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
  border: ${(props) =>
    props.active ? "solid 1px #329eab" : "solid 1px var(--white)"};
  color: ${(props) => (props.active ? "#329eab" : "var(--white)")};
  display: flex;
  align-items: center;
`;

const LinkButtonImage = styled.img`
  width: 1rem;
  margin-right: 1rem;
`;

const Sidebar = () => {
  const location = useLocation();
  return (
    <SidebarContainer>
      <Portrait src={portrait} alt="Portrait" />
      <LinkButtonContainer>
        <Link to="/">
          <LinkButton active={location.pathname === "/"}>
            <LinkButtonImage src={globe} alt="Übersicht" /> Landing Page
          </LinkButton>
        </Link>
        <Link to="/projects">
          <LinkButton active={location.pathname === "/projects"}>
            <LinkButtonImage src={construction} alt="Projekte" /> Projekte
          </LinkButton>
        </Link>
        <Link to="/techstack">
          <LinkButton active={location.pathname === "/techstack"}>
            <LinkButtonImage src={cutlery} alt="TechStack" /> Techstack
          </LinkButton>
        </Link>
        <Link to="/cv">
          <LinkButton active={location.pathname === "/cv"}>
            <LinkButtonImage src={ski} alt="CV" /> CV
          </LinkButton>
        </Link>
      </LinkButtonContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
