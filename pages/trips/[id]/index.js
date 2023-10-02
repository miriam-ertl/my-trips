import ConfirmDelete from "@/components/ConfirmDelete";
import Image from "next/image";
import Link from "next/link";
import PackingListForm from "@/components/PackingListForm";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: trip,
    isLoading,
    mutate,
  } = useSWR(id ? `/api/trips/${id}` : null);
  if (!trip || isLoading) {
    return "... is loading";
  }

  async function handleDeleteTrip() {
    await fetch(`/api/trips/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  async function handleAddToPackingList(item) {
    const updatedTrip = {
      ...trip,
      packingList: [{ name: item }, ...trip.packingList],
    };
    const response = await fetch(`/api/trips/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTrip),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
  }
  return (
    <main>
      <Link href="/" aria-label="Go back to hompage">
        &larr;
      </Link>
      <ConfirmDelete handleDeleteTrip={handleDeleteTrip} />
      <Link href={`/trips/${id}/edit`}>Edit Trip</Link>
      <Link href="#packingList" type="button">
        <button>go to packing list</button>
      </Link>

      <h1>My Trips</h1>
      <section>
        <Image
          src={trip.image}
          width={100}
          height={50}
          alt="Image of favorite Trip"
        />
        <h2> {trip.title} </h2>
        {trip.city}, {trip.country}
        {trip.startDate} - {trip.endDate}
        <h3>My plans</h3>
        <p>
          {trip.description}
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
          invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
          amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
          diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
          et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          Lorem ipsum dolor sit amet.
        </p>
        <h3 id="packingList">{trip.title} packing list:</h3>
        <PackingListForm onHandleAddToPackingList={handleAddToPackingList} />
        {trip.packingList.length === 0 ? (
          <p>
            Your packing list is empty. <br></br> Do you want to add something?
          </p>
        ) : (
          <ul>
            {trip.packingList.map(({ _id, name }) => (
              <li key={_id}>
                {name}
                <button
                  type="button"
                  onClick={() => handleDeleteFromPackingList(_id)}
                >
                  &#10060;
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
