import React from "react";
import styled from "styled-components/macro";
import { Container, TextContainer } from "../components/Container";
import { projectsContent } from "../content/content";

const ProjectCard = styled.div`
  border: solid 1px black;
  display: flex;
`;
const ImageContainer = styled.div`
  border: solid 1px black;
  img {
    width: 10rem;
  }
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
        <h3>Die Projekte</h3>
        <p>Bislang entwickelt und deployt:</p>
      </TextContainer>
      {projectsContent.map((object, index) => (
        <ProjectCard key={index}>
          <ImageContainer>
            <img src={object.src} alt={object.alt} />
          </ImageContainer>
          <DescriptionContainer>
            <Title>{object.title}</Title>
            <div>
              {object.description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
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
    </Container>
  </>
);

export default ProjectsPage;
