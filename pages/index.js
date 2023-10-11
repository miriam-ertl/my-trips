import {
  StyledHeaderOverview,
  StyledHeaderRightSideOverview,
} from "@/components/TripList/TripList.styled";

import AddTripButton from "@/components/AddTripButton";
import TripList from "@/components/TripList";

export default function HomePage() {
  return (
    <main>
      <StyledHeaderOverview>
        <h1>My Trips</h1>
        <StyledHeaderRightSideOverview>
          <AddTripButton />
        </StyledHeaderRightSideOverview>
      </StyledHeaderOverview>
      <TripList />
    </main>
  );
}
