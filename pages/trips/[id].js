import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: trip, isLoading } = useSWR(id ? `/api/trips/${id}` : null);
  if (!trip || isLoading) {
    return "... is loading";
  }
  return (
    <>
      <Link href="/">&larr;</Link>
      <h1>My Trips</h1>
      <section>
        <Image src={trip.image} width={100} height={50} alt="" />
        <h2> {trip.title} </h2>
        {trip.city}, {trip.country}
        <br></br>
        {trip.startDate} - {trip.endDate}
        <p>My plans</p>
        {trip.description}
      </section>
    </>
  );
}
