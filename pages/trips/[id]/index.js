import ConfirmDelete from "@/components/ConfirmDelete";
import Image from "next/image";
import Link from "next/link";
import PackingListForm from "@/components/PackingListForm";
import styled from "styled-components";
import { useRouter } from "next/router";
import useSWR from "swr";

const StyledHeaderDetailPage = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`;

const StyledRightSideDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const StyledBackButtonArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledBackButton = styled.button``;

const StyledEditTripButton = styled.button``;

const StyledDetailPageContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: solid;
  border-width: 1px;
  width: 80%;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid;
  border-width: 1px;
  width: 90%;
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

  return (
    <StyledBody>
      <StyledHeaderDetailPage>
        <StyledBackButtonArea>
          <StyledBackButton>
            <Link href="/" aria-label="Go back to hompage">
              &larr;
            </Link>
          </StyledBackButton>
        </StyledBackButtonArea>
        <h1>My Trips</h1>
        <StyledRightSideDetailPage>
          <ConfirmDelete handleDeleteTrip={handleDeleteTrip} />
          <StyledEditTripButton>
            <Link href={`/trips/${id}/edit`}>Edit Trip</Link>
          </StyledEditTripButton>
          <Link href="#packingList" type="button">
            <button>go to packing list</button>
          </Link>
        </StyledRightSideDetailPage>
      </StyledHeaderDetailPage>
      <StyledDetailPageContent>
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
      </StyledDetailPageContent>
    </StyledBody>
  );
}
