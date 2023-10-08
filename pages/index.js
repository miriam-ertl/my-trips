import {
  StyledAddTripButtonOverview,
  StyledHeaderOverview,
  StyledHeaderRightSideOverview,
  Styledtitle,
} from "@/components/TripList/TripList.styled";

import TripList from "@/components/TripList";

export default function HomePage() {
  return (
    <main>
      <StyledHeaderOverview>
        <Styledtitle>
          <h1>My Trips</h1>
        </Styledtitle>
        <StyledHeaderRightSideOverview>
          <StyledAddTripButtonOverview href="/addTrip">
            + Add Trip
          </StyledAddTripButtonOverview>
        </StyledHeaderRightSideOverview>
      </StyledHeaderOverview>
      <TripList />
    </main>
  );
}
