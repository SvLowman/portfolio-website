import React from "react";
import styled from "styled-components/macro";
import { Container, TextContainer } from "../components/Container";
import { projectsContent } from "../content/content";

const ProjectCard = styled.div`
  border: solid 1px black;
  border-radius: 25px;
  background: var(--white);
  margin: 1.5rem 3rem;
  display: flex;
`;
const ImageContainer = styled.div`
  border: solid 1px black;
  padding: 1rem;
  img {
    width: 10rem;
  }
`;

const DescriptionContainer = styled.div`
  border: solid 1px black;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Title = styled.p`
  border: solid 1px black;
  color: var(--midnightblue);
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0 0 1rem;
`;

const ParagraphsContainer = styled.div`
  margin-bottom: 1rem;
`;

const Paragraphs = styled.p`
  border: solid 1px black;
  color: var(--midnightblue);
  margin: 0;
`;

const ButtonContainer = styled.div`
  border: solid 1px black;
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
            <Title>{object.title}</Title>
            <ParagraphsContainer>
              {object.description.map((paragraph, index) => (
                <Paragraphs key={index}>{paragraph}</Paragraphs>
              ))}
            </ParagraphsContainer>
            <ButtonContainer>
              <a href={object.deploymentLink}>
                <ProjectButton active={onclick}>Zum Deployment</ProjectButton>
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
