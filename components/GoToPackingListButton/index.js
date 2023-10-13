import MoveIconW from "@/components/Icons/MoveIconW.svg";
import { StyledDIVBoxBlue } from "../EditTripButton/EditTripButton.styled.js";
import { StyledPButtonTypo } from "../PButtonTypo/PButtonTypo.styled.js";

export default function GoToPackingListButton() {
  return (
    <StyledDIVBoxBlue>
      <MoveIconW width={15} height={15} />
      <StyledPButtonTypo>PACK. LIST</StyledPButtonTypo>
    </StyledDIVBoxBlue>
  );
}
