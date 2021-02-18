import React from "react";
import styled from "styled-components/macro";
import { Container, TextContainer, Title } from "../components/Container";
import { projectsContent } from "../content/content";

const ProjectCard = styled.div`
  border-radius: 25px;
  background: var(--white);
  margin: 1.5rem 0;
  display: flex;
`;
const ImageContainer = styled.div`
  padding: 1rem;
  img {
    width: 10rem;
  }
`;

const DescriptionContainer = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
`;

const ParagraphsContainer = styled.div`
  margin-bottom: 1rem;
`;

const Paragraphs = styled.p`
  color: var(--midnightblue);
  margin: 0.3rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProjectButton = styled.button`
  border: solid 1px var(--white);
  color: var(--white);
  background: #329eab;
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
            <div>
              <Title>{object.title}</Title>
              <ParagraphsContainer>
                {object.description.map((paragraph, index) => (
                  <Paragraphs key={index}>{paragraph}</Paragraphs>
                ))}
              </ParagraphsContainer>
            </div>
            <ButtonContainer>
              <a href={object.deploymentLink}>
                <ProjectButton>Zum Deployment</ProjectButton>
              </a>
              <a href={object.repoLink}>
                <ProjectButton>Zum Repo</ProjectButton>
              </a>
            </ButtonContainer>
          </DescriptionContainer>
        </ProjectCard>
      ))}
    </Container>
  </>
);

export default ProjectsPage;
