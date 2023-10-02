import Link from "next/link";
import TripList from "@/components/TripList";

export default function HomePage() {
  return (
    <main>
      <h1>My Trips</h1>
      <Link href="/addTrip">+ Add Trip</Link>
      <TripList />
    </main>
  );
}
