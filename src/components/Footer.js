import React from "react";
import styled from "styled-components/macro";

const FooterContainer = styled.div`
  background: white;
  border: solid 1px black;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <FooterContainer>
    <h3>Voilà, der Footer 🐾</h3>
  </FooterContainer>
);

export default Footer;
