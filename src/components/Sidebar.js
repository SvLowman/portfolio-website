import React from "react";
import styled from "styled-components/macro";
import { Link, useLocation } from "react-router-dom";
// import portrait from "../assets/portrait-copy.jpg";
import construction from "../assets/sidebar/emoji-baustelle.png";
import cutlery from "../assets/sidebar/emoji-besteck.png";
import rollercoaster from "../assets/sidebar/emoji-achterbahn.png";

const SidebarContainer = styled.div`
  background: var(--brown);
  position: fixed;
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (orientation: landscape) and (max-width: 1000px) {
    width: 25%;
  }
  @media (orientation: portrait) {
    width: 100%;
    height: fit-content;
    position: relative;
  }
`;

// const Portrait = styled.img`
//   width: 10rem;
//   border-radius: 100%;
//   margin: 1rem;
//   @media (orientation: portrait) {
//     display: none;
//   }
// `;

const LinkButtonContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: fit-content;
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
    props.active ? "solid 1px #329eab" : "solid 1px var(--white)"};
  color: ${(props) => (props.active ? "#329eab" : "var(--white)")};
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.1);
  }
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

const Sidebar = () => {
  const location = useLocation();
  return (
    <SidebarContainer>
      {/* <Portrait src={portrait} alt="Portrait" /> */}
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
    </SidebarContainer>
  );
};

export default Sidebar;
