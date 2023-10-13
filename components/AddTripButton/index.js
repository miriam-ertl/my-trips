import AddIconW from "@/components/Icons/AddIconW.svg";
import { StyledDIVLinkBlue } from "@/components/AddTripButton/AddTripButton.styled";
import { StyledLink } from "../Details/Details.styled";
import { StyledPButtonTypo } from "@/components/PButtonTypo/PButtonTypo.styled";

export default function AddTripButton() {
  return (
    <main>
      <StyledLink href="/addTrip">
        <StyledDIVLinkBlue>
          <AddIconW width={15} height={15} />
          <StyledPButtonTypo>ADD TRIP</StyledPButtonTypo>
        </StyledDIVLinkBlue>
      </StyledLink>
    </main>
  );
}
