import Trip from "../Trip";
import useSWR from "swr";

export default function TripList() {
  const { data: trips, isLoading } = useSWR(`/api/trips`);
  if (!trips || isLoading) {
    return <h2>... is loading</h2>;
  }

  return trips.length === 0 ? (
    <h2>Where are you heading to? Please add a new trip.</h2>
  ) : (
    <ul>
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
    </ul>
  );
}
