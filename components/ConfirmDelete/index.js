import DeleteIconW from "@/components/Icons/DeleteIconW.svg";
import { StyledButtonBlue } from "@/components/ConfirmDelete/ConfirmDelete.styled.js";
import { StyledPButtonTypo } from "../PButtonTypo/PButtonTypo.styled.js";
import { useState } from "react";

export default function ConfirmDelete({ handleDeleteTrip }) {
  const [showMessage, setShowMessage] = useState(false);

  if (!showMessage) {
    return (
      <StyledButtonBlue type="button" onClick={() => setShowMessage(true)}>
        <DeleteIconW width={15} height={15} />
        <StyledPButtonTypo>DELETE</StyledPButtonTypo>
      </StyledButtonBlue>
    );
  }
  return (
    <div>
      <p>Are you sure?</p>
      <StyledButtonBlue type="button" onClick={handleDeleteTrip}>
        <StyledPButtonTypo>YES</StyledPButtonTypo>
      </StyledButtonBlue>
      <StyledButtonBlue type="button" onClick={() => setShowMessage(false)}>
        <StyledPButtonTypo>NO</StyledPButtonTypo>
      </StyledButtonBlue>
    </div>
  );
}
