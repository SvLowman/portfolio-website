import React from "react";
import styled from "styled-components/macro";
import email from "../assets/footer/email.svg";
import githublogo from "../assets/footer/github-logo.svg";
import linkedinlogo from "../assets/footer/linkedin-logo.svg";
import neuefischelogo from "../assets/footer/neuefische-logo.svg";

const FooterContainer = styled.div`
  background: var(--brown);
  color: var(--white);
  text-align: center;
  border: solid 1px black;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: fit-content;
  min-height: 4.5rem;
  display: flex;
  align-items: center;
`;

const ContactContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: 2.5rem;
    margin: 0.5rem 1rem;
    filter: invert(64%) sepia(8%) saturate(2110%) hue-rotate(143deg)
      brightness(88%) contrast(81%);
    @media (max-width: 475px) {
      width: 2rem;
    }
    @media (max-width: 300px) {
      width: 1.5rem;
    }
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
        <img src={githublogo} alt="GitHub-Profil" />
      </a>
      <a href="https://www.linkedin.com/in/sven-lohmann-90a268205/">
        <img src={linkedinlogo} alt="LinkedIn-Profil" />
      </a>
      <a href="https://neuefische.de">
        <img src={neuefischelogo} alt="neue fische Talent App" />
      </a>
    </ContactContainer>
  </FooterContainer>
);

export default Footer;
