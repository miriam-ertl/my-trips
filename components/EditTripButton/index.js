import EditIconW from "@/components/Icons/EditIconW.svg";
import { StyledButtonDIV } from "./EditTripButton.styled";
import { StyledButtonTypo } from "../PButtonTypo/PButtonTypo.styled.js";

export default function EditTripButton() {
  return (
    <StyledButtonDIV>
      <EditIconW width={15} height={15} />
      <StyledButtonTypo>EDIT TRIP</StyledButtonTypo>
    </StyledButtonDIV>
  );
}
