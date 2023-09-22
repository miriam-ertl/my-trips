import { useState } from "react";
import Link from "next/link";

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
      <p>
        Do you want to cancel adding a new trip? If yes, your input will be
        cleared.
      </p>
      <Link href="/">
        <button type="button">Yes</button>
      </Link>
      <button type="button" onClick={() => setShowMessage(false)}>
        Continue
      </button>
    </div>
  );
}
