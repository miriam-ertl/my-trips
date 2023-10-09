import styled from "styled-components";
import { useState } from "react";

const StyledDeleteButton = styled.button`
  border: solid;
  text-decoration: none;
  font-size: 0.8rem;
  border-radius: 0.3rem;
  padding: 0.5rem;
  background-color: white;
  width: 100%;
`;

export default function ConfirmDelete({ handleDeleteTrip }) {
  const [showMessage, setShowMessage] = useState(false);

  if (!showMessage) {
    return (
      <StyledDeleteButton type="button" onClick={() => setShowMessage(true)}>
        Delete
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
