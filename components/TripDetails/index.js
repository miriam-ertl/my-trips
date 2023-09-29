import AddPackingListItem from "@/pages/trips/[id]/packingList";
import ConfirmDelete from "../ConfirmDelete";
import Image from "next/image";
import Link from "next/link";

export default function TripDetails({
  image,
  title,
  city,
  country,
  startDate,
  endDate,
  description,
  handleDeleteTrip,
  packingList,
}) {
  return (
    <main>
      <Link href="/" aria-label="Go back to homepage">
        &larr;
      </Link>
      <ConfirmDelete handleDeleteTrip={handleDeleteTrip} />
      <h1>My Trips</h1>
      <section>
        <Image src={image} width={100} height={50} alt="" />
        <h2> {title} </h2>
        {city}, {country}
        <br></br>
        {startDate} - {endDate}
        <h3>My plans</h3>
        <p>{description}</p>
        <h3>{`${title} packing list:`}</h3>
        <AddPackingListItem />
        <ul>
          {packingList.map((item) => {
            return <li key={item._id}>{item.name}</li>;
          })}
        </ul>
      </section>
    </main>
  );
}
