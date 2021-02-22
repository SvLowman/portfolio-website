import React from "react";
import styled from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
import portrait from "../assets/portrait-copy.jpg";
import construction from "../assets/sidebar/emoji-baustelle.png";
import cutlery from "../assets/sidebar/emoji-besteck.png";
import rollercoaster from "../assets/sidebar/emoji-achterbahn.png";

const SidebarContainer = styled.div`
  background: var(--bars);
  position: fixed;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  animation: slidesidebar 3s reverse;
  transition-timing-function: ease-out;
  @keyframes slidesidebar {
    0% {
      transform: translate(0, 0);
    }
    66% {
      transform: translate(0, calc(50vh + 50%));
    }
    100% {
      transform: translate(0, calc(50vh + 50%));
    }
  }
  @media (orientation: landscape) and (max-width: 1000px) {
    width: 25%;
  }
  @media (orientation: portrait) {
    width: 100%;
    height: fit-content;
    position: relative;
    @keyframes slidesidebar {
      0% {
        transform: translate(0, 0);
      }
      66% {
        transform: translate(calc(-50vw - 50%));
      }
      100% {
        transform: translate(calc(-50vw - 50%));
      }
    }
  }
`;

const Portrait = styled.img`
  height: 4rem;
  width: 4rem;
  border-radius: 100%;
  margin: 1rem;
  @media (orientation: portrait) {
    display: none;
  }
`;

const LinkButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
  animation: fadein 6s reverse;
  @keyframes fadein {
    0% {
      opacity: 1;
    }
    33% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @media (orientation: portrait) {
    width: 100%;
    margin-top: 0;
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

const LinkButton = styled.button`
  border: ${(props) =>
    props.active
      ? "solid 1px var(--buttoncolor)"
      : "solid 1px var(--lighttext)"};
  color: ${(props) =>
    props.active ? "var(--buttoncolor)" : "var(--lighttext)"};
  margin: 1rem 0.5rem;
  display: flex;
  align-items: center;
  @media (orientation: portrait) and (max-width: 475px) {
    span {
      display: none;
    }
  }
`;

const LinkButtonImage = styled.img`
  width: 1rem;
  margin-right: 1rem;
  @media (orientation: portrait) and (max-width: 475px) {
    margin: 0;
  }
`;

const Placeholder = styled.div`
  height: 4rem;
  margin: 1rem;
  @media (orientation: portrait) {
    display: none;
  }
`;

const Sidebar = () => {
  const location = useLocation();
  return (
    <SidebarContainer>
      <Portrait src={portrait} alt="Portrait" />
      <LinkButtonContainer>
        <Link to="/">
          <LinkButton active={location.pathname === "/"}>
            <LinkButtonImage src={construction} alt="Projekte" />{" "}
            <span>Projekte</span>
          </LinkButton>
        </Link>
        <Link to="/techstack">
          <LinkButton active={location.pathname === "/techstack"}>
            <LinkButtonImage src={cutlery} alt="TechStack" />{" "}
            <span>Techstack</span>
          </LinkButton>
        </Link>
        <Link to="/cv">
          <LinkButton active={location.pathname === "/cv"}>
            <LinkButtonImage src={rollercoaster} alt="CV" /> <span>CV</span>{" "}
          </LinkButton>
        </Link>
      </LinkButtonContainer>
      <Placeholder />
    </SidebarContainer>
  );
};

export default Sidebar;
