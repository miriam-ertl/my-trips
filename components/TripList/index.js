import Trip from "../Trip";
import useSWR from "swr";

export default function TripList() {
  const { data: trips, isLoading } = useSWR(`/api/trips`);
  if (!trips || isLoading) {
    return <h1>... is loading</h1>;
  }
  return (
    <ul>
      {trips.map((trip) => {
        return (
          <>
            <Trip
              key={trip._id}
              image={trip.image}
              title={trip.title}
              startDate={trip.startDate}
              endDate={trip.endDate}
              city={trip.city}
              country={trip.country}
            />
          </>
        );
      })}
    </ul>
  );
}
