import React from "react";
import styled from "styled-components/macro";
import { Container } from "../components/Container";

const SmileyContainer = styled.div`
  text-align: center;
  margin: auto 0 auto;
  h3 {
    font-size: 4rem;
  }
`;

const SplashPage = () => (
  <Container>
    <SmileyContainer>
      <h3>😀</h3>
    </SmileyContainer>
  </Container>
);

export default SplashPage;
