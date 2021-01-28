import React from "react";
import styled from "styled-components/macro";
import { Container, TextContainer } from "../components/Container";
import { projectsContent } from "../components/content";

const ProjectCard = styled.div`
  border: solid 1px black;
  display: flex;
`;
const ImageContainer = styled.div`
  border: solid 1px black;
`;

const DescriptionContainer = styled.div`
  border: solid 1px black;
  display: flex;
  flex-direction: column;
  p {
    margin: 0;
  }
`;

const Title = styled.p`
  border: solid 1px black;
`;

const ButtonContainer = styled.div`
  border: solid 1px black;
`;

const ProjectsPage = () => (
  <>
    <Container>
      <TextContainer>
        <h3>Die Projekt-Seite 🧐</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue
          nisi vitae suscipit tellus mauris. Diam volutpat commodo sed egestas
          egestas fringilla. Consectetur purus ut faucibus pulvinar elementum
          integer enim neque volutpat. Posuere morbi leo urna molestie at.
          Tristique senectus et netus et malesuada fames ac. Quam pellentesque
          nec nam aliquam sem et tortor consequat id. Id aliquet risus feugiat
          in ante. Ridiculus mus mauris vitae ultricies. Amet mauris commodo
          quis imperdiet massa tincidunt nunc pulvinar. Elit sed vulputate mi
          sit amet. Facilisi morbi tempus iaculis urna id volutpat. Quam
          pellentesque nec nam aliquam sem. Tortor vitae purus faucibus ornare
          suspendisse sed nisi lacus. Semper feugiat nibh sed pulvinar proin.
        </p>
        {projectsContent.map((object, index) => (
          <ProjectCard key={index}>
            <ImageContainer>
              <img src={object.src} alt={object.alt} />
            </ImageContainer>
            <DescriptionContainer>
              <Title>{object.title}</Title>
              <p>{object.description}</p>
              <ButtonContainer>
                <a href={object.deploymentLink}>
                  <button>Zum Deployment</button>
                </a>
                <a href={object.repoLink}>
                  <button>Zum Repo</button>
                </a>
              </ButtonContainer>
            </DescriptionContainer>
          </ProjectCard>
        ))}
      </TextContainer>
    </Container>
  </>
);

export default ProjectsPage;
