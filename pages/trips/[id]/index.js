import Link from "next/link";
import PackingListItem from "@/components/PackingListForm";
//import TripDetails from "@/components/TripDetails";
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
    <>
      <Link href={`/trips/${id}/edit`}>Edit Trip</Link>
      <TripDetails {...trip} handleDeleteTrip={handleDeleteTrip} />
    </>
  );
}
