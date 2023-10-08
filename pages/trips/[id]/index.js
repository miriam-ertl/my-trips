import {
  StyledBackButton,
  StyledBackButtonArea,
  StyledBody,
  StyledContent,
  StyledDateInformation,
  StyledDetailPageContent,
  StyledEditTripButton,
  StyledHeaderDetailPage,
  StyledImageTrip,
  StyledInformation,
  StyledPackingList,
  StyledRightSideDetailPage,
  StyledgoToPackingListButton,
} from "./Index.styled";

import ConfirmDelete from "@/components/ConfirmDelete";
import Link from "next/link";
import PackingListForm from "@/components/PackingListForm";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";

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
    <StyledBody>
      <StyledHeaderDetailPage>
        <StyledBackButtonArea>
          <StyledBackButton>
            <Link href="/" aria-label="Go back to hompage">
              &larr;{" "}
            </Link>
          </StyledBackButton>
        </StyledBackButtonArea>
        <h1>My Trips</h1>
        <StyledRightSideDetailPage>
          <ConfirmDelete handleDeleteTrip={handleDeleteTrip} />
          <StyledEditTripButton href={`/trips/${id}/edit`}>
            Edit Trip
          </StyledEditTripButton>
          <StyledgoToPackingListButton href="#packingList" type="button">
            go to packing list
          </StyledgoToPackingListButton>
        </StyledRightSideDetailPage>
      </StyledHeaderDetailPage>
      <StyledDetailPageContent>
        <StyledImageTrip
          src={trip.image}
          width={300}
          height={200}
          alt="Image of favourite Trip"
        />
        <StyledContent>
          <h2> {trip.title} </h2>
          <StyledInformation>
            {trip.city}, {trip.country}
            <StyledDateInformation>
              {trip.startDate} - {trip.endDate}
            </StyledDateInformation>
          </StyledInformation>
          <h3>My plans</h3>
          <p>
            {trip.description}
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
            tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
            dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
            elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus est Lorem ipsum dolor sit amet.
          </p>
        </StyledContent>
      </StyledDetailPageContent>
      <StyledPackingList>
        <h3 id="packingList">{trip.title} packing list:</h3>
        <PackingListForm onHandleAddToPackingList={handleAddToPackingList} />
        {trip.packingList.length === 0 ? (
          <p>
            Your packing list is empty. <br></br> Do you want to add something?
          </p>
        ) : (
          <ul>
            {trip.packingList.map(({ _id: id, name }) => (
              <li key={id}>
                <PackingListEntry
                  id={id}
                  name={name}
                  handleDeleteFromPackingList={handleDeleteFromPackingList}
                  handleEditFromPackingList={handleEditFromPackingList}
                />
              </li>
            ))}
          </ul>
        )}
      </StyledPackingList>
    </StyledBody>
  );
}

function PackingListEntry({
  id,
  name,
  handleDeleteFromPackingList,
  handleEditFromPackingList,
}) {
  const [isEditing, setEditing] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    handleEditFromPackingList(id, event.target.name.value);
    setEditing(false);
  }

  return (
    <section>
      {isEditing ? (
        <form onSubmit={onSubmit}>
          <label>
            <input
              name="name"
              placeholder="Edit your item"
              defaultValue={name}
              required
              autoFocus
            />
          </label>
          <button>&#10003;</button>
          <button type="button" onClick={() => setEditing(false)}>
            &#10680;
          </button>
        </form>
      ) : (
        <span>
          {name}
          <button onClick={() => setEditing(true)}>&#9998;</button>
          <button onClick={() => handleDeleteFromPackingList(id)}>
            &#10060;
          </button>
        </span>
      )}
    </section>
  );
}
