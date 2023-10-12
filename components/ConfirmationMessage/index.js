import Link from "next/link";
import { useState } from "react";

export default function ConfirmationMessage({ button }) {
  const [showMessage, setShowMessage] = useState(false);

  if (!showMessage) {
    return (
      <div>
        <button type="button" onClick={() => setShowMessage(true)}>
          {button}
        </button>
      </div>
    );
  }

  return (
    <div>
      <p>Are you sure?</p>
      <Link href="/">
        <button type="button">Yes</button>
      </Link>
      <button type="button" onClick={() => setShowMessage(false)}>
        No
      </button>
    </div>
  );
}
