import ConfirmationMessage from "@/components/ConfirmationMessage";
import { StyledHeadAddTrip } from "@/components/TripForm/TripForm.styled";
import TripForm from "@/components/TripForm";
import { StyledBackLink } from "@/components/Details/Details.styled";

export default function AddTrip() {
  return (
    <main>
      <StyledHeadAddTrip>
        <StyledBackLink href="/" aria-label="Go back to homepage">
          &larr;
        </StyledBackLink>
        <h1>My Trips</h1>
      </StyledHeadAddTrip>
      <h2>Add a trip</h2>
      <TripForm />
    </main>
  );
}
