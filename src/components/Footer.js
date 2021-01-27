import React from "react";
import styled from "styled-components/macro";

const FooterContainer = styled.div`
  border: solid 1px black;
`;

const Footer = () => (
  <FooterContainer>
    <h3>Voilà, der Footer 👣</h3>
  </FooterContainer>
);

export default Footer;
