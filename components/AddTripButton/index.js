import AddIconW from "@/components/Icons/AddIconW.svg";
import { StyledAddButton } from "@/components/AddTripButton/AddTripButton.styled";
import { StyledButtonTypo } from "@/components/PButtonTypo/PButtonTypo.styled";
import { StyledLink } from "../Details/Details.styled";

export default function AddTripButton() {
  return (
    <main>
      <StyledLink href="/addTrip">
        <StyledAddButton>
          <AddIconW width={15} height={15} />
          <StyledButtonTypo>ADD TRIP</StyledButtonTypo>
        </StyledAddButton>
      </StyledLink>
    </main>
  );
}
