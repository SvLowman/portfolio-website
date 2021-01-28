import React from "react";
import styled from "styled-components/macro";
import { Container, TextContainer } from "../components/Container";
import { techStackContent } from "../content/content";

const TechStackContainer = styled.div`
  border: solid 1px black;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TechStackCard = styled.div`
  border: solid 1px black;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  img {
    border: solid 1px black;
    width: 100%;
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
      <h3>Die TechStack-Seite 😑</h3>
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
    </TextContainer>
  </Container>
);

export default TechStackPage;
