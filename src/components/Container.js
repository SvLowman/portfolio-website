import styled from "styled-components/macro";

export const Container = styled.div`
  border: solid 1px black;
  grid-column: 2;
  padding-top: 6rem;
  padding-bottom: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (orientation: portrait) {
    padding-top: 1rem;
  }
`;

export const TextContainer = styled.div`
  border: solid 1px black;
  width: 50%;
  @media (orientation: portrait) {
    width: 75%;
  }
`;
