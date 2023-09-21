import TripList from "@/components/TripList";
import TripForm from "@/components/TripForm";

export default function HomePage() {
  return (
    <div>
      <h1>My Trips</h1>
      <TripForm />
      <TripList />
    </div>
  );
}
