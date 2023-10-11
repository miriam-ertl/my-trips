import {
  StyledAddButton,
  StyledAddTripLink,
} from "@/components/AddTripButton/AddTripButton.styled";

import AddIcon from "./AddIcon.svg";
import { StyledButtonTypo } from "@/components/PButtonTypo/PButtonTypo.styled";

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
