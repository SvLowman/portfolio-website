import React from "react";
import styled from "styled-components/macro";
import { Container, TextContainer, Title } from "../components/Container";
import { projectsContent } from "../content/content";

const ProjectCard = styled.div`
  border-radius: 25px;
  background: var(--lighttext);
  margin: 1.5rem 0;
  max-width: 100%;
  display: flex;
  animation: slide 1s reverse;
  transition-timing-function: ease-out;
  :nth-child(3) {
    transition-delay: 1s;
  }
  @keyframes slide {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(calc(50vw + 50%));
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;
const ImageContainer = styled.div`
  padding: 1rem;
  img {
    width: 10rem;
  }
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
  }
`;

const DescriptionContainer = styled.div`
  padding: 1rem 2rem 1rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100%;
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;

const ParagraphsContainer = styled.div`
  margin-bottom: 1rem;
  @media (min-width: 1300px) {
    columns: 2;
    column-gap: 3rem;
  }
`;

const Paragraphs = styled.p`
  color: var(--background);
  margin: 0.4rem 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const ProjectButton = styled.button`
  border: solid 1px var(--lighttext);
  color: var(--lighttext);
  background: #329eab;
`;

const ProjectsPage = () => (
  <>
    <Container>
      <TextContainer>
        <h3>Bislang entwickelt und deployt:</h3>
      </TextContainer>
      {/* <TestSquare /> */}
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
