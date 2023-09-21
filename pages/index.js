import TripList from "@/components/TripList";
import TripForm from "@/components/TripForm";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1>My Trips</h1>
      <Link href="/addTrip">+ Add Trip</Link>
      <TripList />
    </main>
  );
}
