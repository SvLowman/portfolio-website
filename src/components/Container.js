import styled from "styled-components/macro";

export const Container = styled.div`
  grid-column: 2;
  padding: 7rem 6rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (orientation: portrait) {
    padding-top: 1rem;
  }
  @media (max-width: 600px) {
    padding: 3rem 3rem 4rem;
  }
  @media (max-width: 500px) {
    padding: 1rem 1rem 4rem;
  }
`;

export const TextContainer = styled.div`
  width: 50%;
  color: var(--white);
  @media (orientation: portrait) {
    width: 75%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
  h3 {
    text-align: center;
  }
`;

export const Title = styled.p`
  border-bottom: solid 1px black;
  color: var(--midnightblue);
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0 0 1rem;
  padding: 0 0 0.2rem;
`;
