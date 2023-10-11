import Link from "next/link";
import styled from "styled-components";

export const StyledAddButton = styled.div`
  border-radius: 1.44rem;
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.06) inset,
    0px 0px 8px 2px rgba(70, 120, 176, 0.35);
  width: 5.6875rem;
  height: 1.3125rem;
  background-color: #4678b0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledAddTripLink = styled(Link)`
  text-decoration: none;
`;

export const StyledButtonTypo = styled.p`
  font-size: 0.625rem;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  margin: 0rem 0rem 0.1rem 0.2rem;
`;
