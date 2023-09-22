import { useState } from "react";
export default function ConfirmDelete({ handleDeleteTrip }) {
  const [showMessage, setShowMessage] = useState(false);
  if (!showMessage) {
    return (
      <div>
        <button type="button" onClick={() => setShowMessage(true)}>
          Delete trip
        </button>
      </div>
    );
  }
  return (
    <div>
      <p>Are you sure ?</p>
      <button type="button" onClick={handleDeleteTrip}>
        Yes
      </button>
      <button type="button" onClick={() => setShowMessage(false)}>
        No
      </button>
    </div>
  );
}
