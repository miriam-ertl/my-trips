import Image from "next/image";
import styled from "styled-components";

export const StyledTrip = styled.div`
  background-color: #bee5fd;
  border-radius: 3rem;
  border: solid;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  }
`;
export const StyledH2 = styled.h2`
  grid-area: 1 / 2 / 2 / 3;
`;
export const StyledPDate = styled.p`
  grid-area: 2 / 2 / 3 / 3;
`;
export const StyledDestination = styled.p`
  grid-area: 3 / 2 / 4 / 3;
`;

export const StyledImage = styled(Image)`
  border-radius: 1rem;
  grid-area: 1 / 1 / 4 / 2;
`;
