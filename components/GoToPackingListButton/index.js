import MoveIcon from "./MoveIcon.svg";
import { StyledButtonDIV } from "../EditTripButton/EditTripButton.styled.js";
import { StyledButtonTypo } from "../PButtonTypo/PButtonTypo.styled.js";

export default function GoToPackingListButton() {
  return (
    <StyledButtonDIV>
      <MoveIcon width={15} height={15} />
      <StyledButtonTypo>PACK. LIST</StyledButtonTypo>
    </StyledButtonDIV>
  );
}
