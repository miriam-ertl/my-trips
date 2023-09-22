import TripForm from "@/components/TripForm";
import ConfirmationMessage from "@/components/ConfirmationMessage";

export default function AddTrip() {
  return (
    <main>
      <ConfirmationMessage button="&larr;" />
      <h1>My Trips</h1>
      <h2>Add a trip</h2>
      <TripForm />
      <ConfirmationMessage button={"Cancel"} />
    </main>
  );
}
