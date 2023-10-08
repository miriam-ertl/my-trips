import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledTrip = styled.div`
  background-color: #bee5fd;
  border-radius: 1.5rem;
  border: none;
  display: flex;  
  align-items: center;
  justify-content: space-evenly;
  margin: 1rem 0rem 1rem 0rem;
  }
`;
export const StyledH2 = styled.h2`
  font-size: 1rem;
  margin: 1rem 0rem 0rem 0rem;
`;
export const StyledPDate = styled.p`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  margin-top: 0.3rem;
`;
export const StyledDestination = styled.p`
  font-size: 1rem;
  margin: 0rem 0rem 1rem 0rem;
`;

export const StyledImage = styled(Image)`
  border-radius: 1rem;
  margin-left: 0.5rem;
`;
export const StyledContent = styled.div`
  display: block;
  margin-left: 0.7rem;
  margin-right: 1rem;
  text-align: left;
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
