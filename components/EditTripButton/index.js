import EditIcon from "./EditIcon.svg";
import { StyledButtonDIV } from "./EditTripButton.styled";
import { StyledButtonTypo } from "@/components/PButtonTypo/PButtonTypo.styled";

export default function EditTripButton() {
  return (
    <StyledButtonDIV>
      <EditIcon width={15} height={15} />
      <StyledButtonTypo>EDIT TRIP</StyledButtonTypo>
    </StyledButtonDIV>
  );
}
