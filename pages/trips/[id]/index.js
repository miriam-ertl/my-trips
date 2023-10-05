import ConfirmDelete from "@/components/ConfirmDelete";
import Image from "next/image";
import Link from "next/link";
import PackingListForm from "@/components/PackingListForm";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 0.5rem;
  margin: 1rem;
  padding: 1rem;
  width: 100%;
  gap: 1rem;
`;

const StyledHeaderDetailPage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 0.5rem;
  padding: 0.5rem;
`;

const StyledRightSideDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  flex-basis: 2rem;
`;

const StyledBackButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-basis: 2rem;
`;

const StyledBackButton = styled.button``;

const StyledEditTripButton = styled.button`
  display: flex;
`;
const StyledgoToPackingListButton = styled.button``;

const StyledDetailPageContent = styled.div`
  display: flex;
  flex-direction: column;
  border: solid;
  border-width: 0.2rem;
  border-radius: 3rem;
`;
const StyledImageTrip = styled(Image)`
  border-radius: 3rem;
  margin: 1rem;
`;
const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 3rem;
  padding: 1rem;
  width: 100%;
`;
const StyledPackingList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border: solid;
  border-radius: 3rem;
  padding: 1rem;
  width: 100%;
`;
const StyledUL = styled.ul`
  list-style: none;
`;
const StyledLi = styled.li``;
const StyledInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
`;

const StyledDateInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: left;
`;
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
          alt="Image of favorite Trip"
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
<<<<<<< HEAD
          <StyledUL>
            {trip.packingList.map(({ _id, name }) => (
              <StyledLi key={_id}>
                {name}
                <button
                  type="button"
                  onClick={() => handleDeleteFromPackingList(_id)}
                >
                  &#10060;
                </button>
              </StyledLi>
=======
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
>>>>>>> main
            ))}
          </StyledUL>
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
