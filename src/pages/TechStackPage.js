import React from "react";
import styled from "styled-components/macro";
import { Container, TextContainer } from "../components/Container";
import { techStackContent } from "../content/content";

const TechStackContainer = styled.div`
  border: solid 1px black;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechStackCard = styled.div`
  border: solid 1px black;
  width: 30%;
  margin: 1.5%;
  padding: 1.5%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  img {
    border: solid 1px black;
    width: 100%;
    margin-bottom: 1rem;
  }
  div {
    border: solid 1px black;
    width: 100%;
    height: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto 0;
    p {
      border: solid 1px black;
      margin: 0;
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
