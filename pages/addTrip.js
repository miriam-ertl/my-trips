import TripForm from "@/components/TripForm";
import Link from "next/link";
import ConfirmationMessage from "@/components/ConfirmationMessage";

export default function AddTrip() {
  return (
    <main>
      <ConfirmationMessage button="&larr;" />
      <h1>My Trips</h1>
      <h2>Add a trip</h2>
      <TripForm />
    </main>
  );
}
