import AddIconW from "@/components/Icons/AddIconW.svg";
import { StyledButtonTypo } from "@/components/PButtonTypo/PButtonTypo.styled";
import { StyledDIVLinkBlue } from "@/components/AddTripButton/AddTripButton.styled";
import { StyledLink } from "../Details/Details.styled";

export default function AddTripButton() {
  return (
    <main>
      <StyledLink href="/addTrip">
        <StyledDIVLinkBlue>
          <AddIconW width={15} height={15} />
          <StyledButtonTypo>ADD TRIP</StyledButtonTypo>
        </StyledDIVLinkBlue>
      </StyledLink>
    </main>
  );
}
