import React from "react";
import styled from "styled-components/macro";
import email from "../assets/email.svg";
import githublogo from "../assets/github-logo.svg";
import linkedinlogo from "../assets/linkedin-logo.svg";

const FooterContainer = styled.div`
  background: white;
  text-align: center;
  border: solid 1px black;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const ContactContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  img {
    width: 2.5rem;
    margin: 0.5rem;
    filter: invert(64%) sepia(8%) saturate(2110%) hue-rotate(143deg)
      brightness(88%) contrast(81%);
  }
`;

const MailContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Footer = () => (
  <FooterContainer>
    <ContactContainer>
      <MailContainer>
        <a href="mailto:SvenLohmann@gmx.de">
          <img src={email} alt="E-Mail" />
        </a>
        <p>SvenLohmann@gmx.de</p>
      </MailContainer>
      <a href="https://github.com/SvLowman">
        <img src={githublogo} alt="GitHub" />
      </a>
      <a href="https://www.linkedin.com/in/sven-lohmann-90a268205/">
        <img src={linkedinlogo} alt="LinkedIn" />
      </a>
    </ContactContainer>
  </FooterContainer>
);

export default Footer;
