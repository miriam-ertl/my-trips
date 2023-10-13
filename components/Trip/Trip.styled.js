import Image from "next/image";
import styled from "styled-components";

export const StyledDIVTrip = styled.div`
  border: solid;
  border-width: 1px;
  border-color: #afafaf;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.5rem;
  display: flex;  
  align-items: center;
  justify-content: flex-start;
  margin: 1rem 0rem 1rem 0rem;
  width: 22rem;
  }
`;
export const StyledH2 = styled.h2`
  font-size: 1rem;
  margin: 1rem 0rem 0rem 0rem;
`;
export const StyledPDate = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
`;
export const StyledPDestination = styled.p`
  font-size: 0.9rem;
  margin: 0rem 0rem 1rem 0rem;
`;

export const StyledImage = styled(Image)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  margin: 0rem 0.7rem 0rem 0.7rem;
`;
export const StyledDIVContent = styled.div`
  display: block;
  margin-left: 0.2rem;
  margin-right: 1rem;
  text-align: left;
`;
