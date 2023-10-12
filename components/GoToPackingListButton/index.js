import MoveIconW from "@/components/Icons/MoveIconW.svg";
import { StyledButtonDIV } from "../EditTripButton/EditTripButton.styled.js";
import { StyledButtonTypo } from "../PButtonTypo/PButtonTypo.styled.js";

export default function GoToPackingListButton() {
  return (
    <StyledButtonDIV>
      <MoveIconW width={15} height={15} />
      <StyledButtonTypo>PACK. LIST</StyledButtonTypo>
    </StyledButtonDIV>
  );
}
