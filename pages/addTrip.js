import BackIcon from "@/components/BackButton/BackIcon.svg";
import ConfirmationMessage from "@/components/ConfirmationMessage";
import { StyledBackButton } from "@/components/BackButton/BackButton.styled";
import { StyledBackLink } from "@/components/Details/Details.styled";
import { StyledHeadAddTrip } from "@/components/TripForm/TripForm.styled";
import { StyledLink } from "@/components/BackButton/BackButton.styled";
import TripForm from "@/components/TripForm";

export default function AddTrip() {
  return (
    <main>
      <StyledHeadAddTrip>
        <StyledLink href="/" aria-label="Go back to homepage">
          <StyledBackButton>
            <BackIcon width={15} height={15} />
          </StyledBackButton>
        </StyledLink>
        <h1>My Trips</h1>
      </StyledHeadAddTrip>
      <h2>Add a trip</h2>
      <TripForm />
    </main>
  );
}
