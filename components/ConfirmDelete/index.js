import Link from "next/link";
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
      <p>Are you sure?</p>
      <Link href="/">
        <button type="button" onClick={handleDeleteTrip}>
          Yes
        </button>
      </Link>
      <button type="button" onClick={() => setShowMessage(false)}>
        No
      </button>
    </div>
  );
}
