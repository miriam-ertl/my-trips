import Link from "next/link";
export default function Confirmation() {
  return (
    <main>
      <h1>My Trips</h1>
      <p>Congratulations, you have added a new trip</p>
      <Link href="/">Home</Link>
    </main>
  );
}
