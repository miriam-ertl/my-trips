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
  console.log(trip);
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

  async function handleDeleteFromPackingList(_id) {
    const residualItems = trip.packingList.filter(
      (deleteItem) => deleteItem._id !== _id
    );
    const updatedTrip = {
      ...trip,
      packingList: [...residualItems],
    };

    const response = await fetch(`/api/trips/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTrip),
    });

    if (!response.ok) {
      alert("Error updating trip");
      return;
    }

    mutate();
  }

  async function handleCompletePackingList(_id) {
    const completeItems = trip.packingList.map((completeItem) =>
      completeItem._id === _id
        ? { ...completeItem, checked: !completeItem.checked }
        : { ...completeItem }
    );
    const updatedTrip = {
      ...trip,
      packingList: [...completeItems],
    };
    console.log(updatedTrip);

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
  const packedListItems = trip.packingList.filter(
    (listItem) => listItem.checked
  );
  const unpackedListItems = trip.packingList.filter(
    (listItem) => !listItem.checked
  );

  return (
    <main>
      <Link href="/" aria-label="Go back to homepage">
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
        <p>{trip.description}</p>
        <h3 id="packingList">{trip.title} packing list:</h3>
        <PackingListForm onHandleAddToPackingList={handleAddToPackingList} />
        {trip.packingList.length === 0 ? (
          <p>
            Your packing list is empty.<br></br> Do you want to add something?
          </p>
        ) : (
          <>
            <ul>
              {unpackedListItems.map(({ _id, name, checked }) => (
                <li key={_id}>
                  <input
                    type="checkbox"
                    defaultChecked={false}
                    checked={checked}
                    onChange={() => handleCompletePackingList(_id)}
                  />
                  <span
                    style={{
                      textDecoration: checked ? "line-through" : "none",
                    }}
                  >
                    {name}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleDeleteFromPackingList(_id)}
                  >
                    &#10060;
                  </button>
                </li>
              ))}
            </ul>
            {packedListItems.length > 0 && (
              <>
                <h3>Done:</h3>
                <ul>
                  {packedListItems.map(({ _id, name, checked }) => (
                    <li key={_id}>
                      <input
                        type="checkbox"
                        defaultChecked={false}
                        checked={checked}
                        onChange={() => handleCompletePackingList(_id)}
                      />
                      <span
                        style={{
                          textDecoration: checked ? "line-through" : "none",
                        }}
                      >
                        {name}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleDeleteFromPackingList(_id)}
                      >
                        &#10060;
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </>
        )}
      </section>
    </main>
  );
}
