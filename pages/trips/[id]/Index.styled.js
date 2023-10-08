import Image from "next/image";
import styled from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 0.5rem;
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  gap: 1rem;
`;

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
  flex-basis: 2rem;
`;

export const StyledBackButton = styled.button``;

export const StyledEditTripButton = styled.button`
  display: flex;
`;
export const StyledgoToPackingListButton = styled.button``;

export const StyledDetailPageContent = styled.div`
  display: flex;
  flex-direction: column;
  border: solid;
  border-width: 0.2rem;
  border-radius: 3rem;
`;
export const StyledImageTrip = styled(Image)`
  border-radius: 3rem;
  margin: 1rem;
`;
export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 3rem;
  padding: 1rem;
  width: 100%;
`;
export const StyledPackingList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border: solid;
  border-radius: 3rem;
  padding: 1rem;
  width: 100%;
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
