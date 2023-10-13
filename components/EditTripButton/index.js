import EditIconW from "@/components/Icons/EditIconW.svg";
import { StyledDIVBoxBlue } from "./EditTripButton.styled";
import { StyledPButtonTypo } from "../PButtonTypo/PButtonTypo.styled.js";

export default function EditTripButton() {
  return (
    <StyledDIVBoxBlue>
      <EditIconW width={15} height={15} />
      <StyledPButtonTypo>EDIT TRIP</StyledPButtonTypo>
    </StyledDIVBoxBlue>
  );
}
