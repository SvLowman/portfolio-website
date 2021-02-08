import React from "react";
import styled from "styled-components/macro";
import { Container, TextContainer } from "../components/Container";
import { cvContent } from "../content/content";

const CVContainer = styled.div`
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const CVCard = styled.div`
  border: solid 1px black;
  width: fit-content;
`;

const CVPage = () => (
  <Container>
    <TextContainer>
      <h3>Curriculum Vitae</h3>
    </TextContainer>
    <CVContainer>
      {cvContent.map((object, index) => (
        <CVCard key={index}>
          <p>{object.position}</p>
          <p>{object.company}</p>
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
