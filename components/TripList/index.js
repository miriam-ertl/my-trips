import Trip from "../Trip";
import useSWR from "swr";

export default function TripList() {
  const { data: trips, isLoading } = useSWR(`/api/trips`);
  if (!trips || isLoading) {
    return <h1>... is loading</h1>;
  }
  return (
    <>
      {trips.map((trip) => {
        return (
          <ul key={trip._id}>
            <Trip
              image={trip.image}
              title={trip.title}
              startDate={trip.startDate}
              endDate={trip.endDate}
              city={trip.city}
              country={trip.country}
            />
          </ul>
        );
      })}
    </>
  );
}
