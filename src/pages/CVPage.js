import React from "react";
import styled from "styled-components/macro";
import { Container, TextContainer, Title } from "../components/Container";
import { cvContent } from "../content/content";

const CVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CVCard = styled.div`
  border-radius: 25px;
  background: linear-gradient(
    160deg,
    var(--lighttext),
    var(--lighttext-gradient)
  );
  padding: 2rem 3rem 2rem;
  margin: 1.5rem 0 1.5rem 3rem;
  width: fit-content;
  box-shadow: 5px 5px 20px var(--background-shade);
  animation: slide 1s reverse;
  transition-timing-function: ease-out;
  @keyframes slide {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(calc(50vw + 50%));
    }
  }
  @media (max-width: 600px) {
    padding: 2rem;
  }
  @media (max-width: 360px) {
    padding: 1rem;
  }
`;

const CompanyName = styled.p`
  font-weight: 500;
  letter-spacing: 0.2rem;
`;

const CVPage = () => (
  <Container>
    <TextContainer>
      <h3>Curriculum Vitae</h3>
    </TextContainer>
    <CVContainer>
      {cvContent.map((object, index) => (
        <CVCard key={index}>
          <Title>{object.position}</Title>
          <CompanyName>{object.company}</CompanyName>
          <p>{object.period}</p>
          <ul>
            {object.tasks.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </CVCard>
      ))}
    </CVContainer>
  </Container>
);

export default CVPage;
