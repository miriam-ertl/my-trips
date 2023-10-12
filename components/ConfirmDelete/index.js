import { StyledButtonTypo } from "../PButtonTypo/PButtonTypo.styled.js";
import styled from "styled-components";
import { useState } from "react";

const StyledDeleteButton = styled.button`
  border-radius: 1.44rem;
  box-shadow: 0px 0px 7px 4px rgba(0, 0, 0, 0.06) inset,
    0px 0px 8px 2px rgba(70, 120, 176, 0.35);
  width: 5.6875rem;
  height: 1.3125rem;
  background-color: #4678b0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

export default function ConfirmDelete({ handleDeleteTrip }) {
  const [showMessage, setShowMessage] = useState(false);

  if (!showMessage) {
    return (
      <StyledDeleteButton type="button" onClick={() => setShowMessage(true)}>
        <StyledButtonTypo>DELETE TRIP</StyledButtonTypo>
      </StyledDeleteButton>
    );
  }
  return (
    <div>
      <p>Do you really want to delete this trip?</p>
      <button type="button" onClick={handleDeleteTrip}>
        Yes
      </button>
      <button type="button" onClick={() => setShowMessage(false)}>
        No
      </button>
    </div>
  );
}
