import TripDetails from "@/components/TripDetails";
import { useRouter } from "next/router";
import useSWR from "swr";
export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: trip, isLoading } = useSWR(id ? `/api/trips/${id}` : null);
  if (!trip || isLoading) {
    return "... is loading";
  }
  async function handleDeleteTrip() {
    await fetch(`/api/trips/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }
  return (
    <TripDetails
      image={trip.image}
      title={trip.title}
      city={trip.city}
      country={trip.country}
      startDate={trip.startDate}
      endDate={trip.endDate}
      description={trip.description}
      handleDeleteTrip={handleDeleteTrip}
    />
  );
}
