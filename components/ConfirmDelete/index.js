import DeleteIconW from "@/components/Icons/DeleteIconW.svg";
import { StyledButtonTypo } from "../PButtonTypo/PButtonTypo.styled.js";
import { StyledDeleteButton } from "@/components/ConfirmDelete/ConfirmDelete.styled.js";
import { useState } from "react";

export default function ConfirmDelete({ handleDeleteTrip }) {
  const [showMessage, setShowMessage] = useState(false);

  if (!showMessage) {
    return (
      <StyledDeleteButton type="button" onClick={() => setShowMessage(true)}>
        <DeleteIconW width={15} height={15} />
        <StyledButtonTypo>DELETEB</StyledButtonTypo>
      </StyledDeleteButton>
    );
  }
  return (
    <div>
      <p>Are you sure?</p>
      <button type="button" onClick={handleDeleteTrip}>
        Yes
      </button>
      <button type="button" onClick={() => setShowMessage(false)}>
        No
      </button>
    </div>
  );
}
