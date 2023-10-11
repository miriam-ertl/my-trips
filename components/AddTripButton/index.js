import {
  StyledAddButton,
  StyledAddTripLink,
  StyledButtonTypo,
} from "@/components/AddTripButton/AddTripLink.styled";

import AddIcon from "./AddIcon.svg";

export default function AddTripButton() {
  return (
    <main>
      <StyledAddTripLink href="/addTrip">
        <StyledAddButton>
          <AddIcon width={15} height={15} />
          <StyledButtonTypo>ADD TRIP</StyledButtonTypo>
        </StyledAddButton>
      </StyledAddTripLink>
    </main>
  );
}
