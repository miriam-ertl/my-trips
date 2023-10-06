import ConfirmDelete from "@/components/ConfirmDelete";
import Image from "next/image";
import ItemList from "@/components/ItemList";
import Link from "next/link";
import PackingList from "@/components/PackingList";
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

  async function handleEditFromPackingList(_id, name) {
    const updatedPackingList = trip.packingList.map((listItem) =>
      listItem._id === _id ? { ...listItem, name } : listItem
    );

    const updatedTrip = {
      ...trip,
      packingList: [...updatedPackingList],
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
          <PackingList
            packingList={trip.packingList}
            onCheck={handleCompletePackingList}
            onEdit={handleEditFromPackingList}
            onRemove={handleDeleteFromPackingList}
          />
        )}
      </section>
    </main>
  );
}
