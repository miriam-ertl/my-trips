import Image from "next/image";
import styled from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
//
// background-color: #bee5fd;
// border-radius: 1.5rem;
// border: none;
// display: flex;
// align-items: center;
// justify-content: flex-start;
// margin: 1rem 0rem 1rem 0rem;
// width: 22rem;

export const StyledHeaderDetailPage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0.5rem;
  padding: 0.5rem;
`;

export const StyledRightSideDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-basis: 2rem;
`;

export const StyledBackButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledBackButton = styled.button`
  border: solid;
  text-decoration: none;
  font-size: 0.8rem;
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: white;
`;

export const StyledEditTripButton = styled.button`
  border: solid;
  text-decoration: none;
  font-size: 0.8rem;
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: white;
`;
export const StyledgoToPackingListButton = styled.button`
  border: solid;
  text-decoration: none;
  font-size: 0.8rem;
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: white;
`;

export const StyledDetailPageContent = styled.div`
  background-color: #bee5fd;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 22rem;
`;
export const StyledImageTrip = styled(Image)`
  border-radius: 1.5rem;
  margin: 1rem;
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem;
`;
export const StyledPackingList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border: solid;
  border-radius: 3rem;
  padding: 1rem;
`;

export const StyledInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
`;

export const StyledDateInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
`;
