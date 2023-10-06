import Trip from "../Trip";
import styled from "styled-components";
import useSWR from "swr";

const StyledList = styled.ul`
  list-style-type: none;
  height: 100%;
  background-color: #7dcbfa;
  gap: 1rem;
  margin: 1rem;
  padding-inline-start: 0;
`;

export default function TripList() {
  const { data: trips, isLoading } = useSWR(`/api/trips`);
  if (!trips || isLoading) {
    return <h2>... is loading</h2>;
  }

  return trips.length === 0 ? (
    <h2>Where are you heading to? Please add a new trip.</h2>
  ) : (
    <StyledList>
      {trips.map((trip) => {
        return (
          <Trip
            key={trip._id}
            id={trip._id}
            image={trip.image}
            title={trip.title}
            startDate={trip.startDate}
            endDate={trip.endDate}
            city={trip.city}
            country={trip.country}
          />
        );
      })}
    </StyledList>
  );
}
