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
      <h3>Die CV-Seite 😎</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Congue nisi vitae
        suscipit tellus mauris. Diam volutpat commodo sed egestas egestas
        fringilla. Consectetur purus ut faucibus pulvinar elementum integer enim
        neque volutpat. Posuere morbi leo urna molestie at. Tristique senectus
        et netus et malesuada fames ac. Quam pellentesque nec nam aliquam sem et
        tortor consequat id. Id aliquet risus feugiat in ante. Ridiculus mus
        mauris vitae ultricies. Amet mauris commodo quis imperdiet massa
        tincidunt nunc pulvinar. Elit sed vulputate mi sit amet. Facilisi morbi
        tempus iaculis urna id volutpat. Quam pellentesque nec nam aliquam sem.
        Tortor vitae purus faucibus ornare suspendisse sed nisi lacus. Semper
        feugiat nibh sed pulvinar proin.
      </p>
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
    </TextContainer>
  </Container>
);

export default CVPage;
