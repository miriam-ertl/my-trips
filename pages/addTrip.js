import ConfirmationMessage from "@/components/ConfirmationMessage";
import { StyledHeadAddTrip } from "@/components/TripForm/TripForm.styled";
import TripForm from "@/components/TripForm";

export default function AddTrip() {
  return (
    <main>
      <StyledHeadAddTrip>
        <ConfirmationMessage button="&larr;" />
        <h1>My Trips</h1>
      </StyledHeadAddTrip>
      <h2>Add a trip</h2>
      <TripForm />
    </main>
  );
}
