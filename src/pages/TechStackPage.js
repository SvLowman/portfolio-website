import React from "react";
import styled from "styled-components/macro";
import { Container, TextContainer } from "../components/Container";
import { techStackContent } from "../content/content";

const TechStackContainer = styled.div`
  width: 70%;
  margin-bottom: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechStackCard = styled.div`
  border-radius: 25px;
  background: var(--white);
  width: 30%;
  margin: 1.5%;
  padding: 1.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 500px) {
    width: 100%;
  }
  @media (max-width: 1000px) and (min-width: 500px) {
    width: 47%;
  }
  img {
    width: 100%;
    margin-bottom: 1rem;
  }
  div {
    width: 100%;
    height: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    p {
      font-family: "Montserrat", sans-serif;
      font-weight: 700;
      text-align: center;
      margin: 0 0 1rem;
    }
  }
`;

const TechStackPage = () => (
  <Container>
    <TextContainer>
      <h3>Der TechStack</h3>
    </TextContainer>
    <TechStackContainer>
      {techStackContent.map((object, index) => (
        <TechStackCard key={index}>
          <img src={object.src} alt={object.alt} />
          <div>
            <p>{object.name}</p>
          </div>
        </TechStackCard>
      ))}
    </TechStackContainer>
  </Container>
);

export default TechStackPage;
