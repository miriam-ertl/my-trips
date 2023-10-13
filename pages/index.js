import {
  StyledDIVHeaderOverview,
  StyledDIVHeaderRightSideOverview,
} from "@/components/TripList/TripList.styled";

import AddTripButton from "@/components/AddTripButton";
import TripList from "@/components/TripList";

export default function HomePage() {
  return (
    <main>
      <StyledDIVHeaderOverview>
        <h1>My Trips</h1>
        <StyledDIVHeaderRightSideOverview>
          <AddTripButton />
        </StyledDIVHeaderRightSideOverview>
      </StyledDIVHeaderOverview>
      <TripList />
    </main>
  );
}
