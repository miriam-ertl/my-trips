import Link from "next/link";
import styled from "styled-components";
export const StyledList = styled.ul`
  list-style-type: none;
  padding-inline-start: 0;
`;
export const StyledHeaderOverview = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderRightSideOverview = styled.div`
  display: flex;
`;

export const StyledAddTripButtonOverview = styled(Link)`
  border: solid;
  text-decoration: none;
  font-size: 0.8rem;
  border-radius: 0.3rem;
  padding: 0.5rem;
`;
export const Styledtitle = styled.div`
  font-size: 1rem;
`;
