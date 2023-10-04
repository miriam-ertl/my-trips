import styled from "styled-components";
import { useState } from "react";

const StyledDeleteButton = styled.button``;

export default function ConfirmDelete({ handleDeleteTrip }) {
  const [showMessage, setShowMessage] = useState(false);

  if (!showMessage) {
    return (
      <div>
        <button type="button" onClick={() => setShowMessage(true)}>
          Delete
        </button>
      </div>
    );
  }
  return (
    <StyledDeleteButton>
      <p>Do you really want to delete this trip?</p>
      <button type="button" onClick={handleDeleteTrip}>
        Yes
      </button>
      <button type="button" onClick={() => setShowMessage(false)}>
        No
      </button>
    </StyledDeleteButton>
  );
}
