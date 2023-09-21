import TripForm from "@/components/TripForm";
import Link from "next/link";
export default function AddTrip() {
  return (
    <main>
      <Link href="/">&larr;</Link>
      <h1>My Trips</h1>
      <h2>Add a trip</h2>
      <TripForm />
    </main>
  );
}
