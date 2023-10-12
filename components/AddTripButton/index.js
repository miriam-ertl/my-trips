import {
  StyledAddButton,
  StyledAddTripLink,
} from "@/components/AddTripButton/AddTripButton.styled";

import AddIconW from "@/components/Icons/AddIconW.svg";
import { StyledButtonTypo } from "@/components/PButtonTypo/PButtonTypo.styled";

export default function AddTripButton() {
  return (
    <main>
      <StyledAddTripLink href="/addTrip">
        <StyledAddButton>
          <AddIconW width={15} height={15} />
          <StyledButtonTypo>ADD TRIP</StyledButtonTypo>
        </StyledAddButton>
      </StyledAddTripLink>
    </main>
  );
}
