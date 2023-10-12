import {
  StyledBackButtonArea,
  StyledBackLink,
  StyledBody,
  StyledContent,
  StyledDateAndInformation,
  StyledDetailPageContent,
  StyledEditTripButton,
  StyledHeaderDetailPage,
  StyledImageTrip,
  StyledPackingList,
  StyledRightSideDetailPage,
  StyledgoToPackingListLink,
} from "../../../components/Details/Details.styled";

import ConfirmDelete from "@/components/ConfirmDelete";
import PackingList from "@/components/PackingList";
import PackingListForm from "@/components/PackingListForm";
import { useRouter } from "next/router";
import useSWR from "swr";
import { formatDistanceToNowStrict } from "date-fns";
import { formatDistanceStrict } from "date-fns";

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
  function displayCountdown() {
    const countdown = formatDistanceToNowStrict(new Date(trip.startDate), {
      unit: "day",
      roundingMethod: "floor",
      addSuffix: true,
    });

    const parsedCountdown = countdown.replace(/[^0-9]/g, "");

    const countdownAdjusted = formatDistanceToNowStrict(
      new Date(trip.startDate),
      {
        roundingMethod: "floor",
        addSuffix: true,
      }
    );

    if (!countdown.includes("ago") && parsedCountdown < 30) {
      return `. Starts ${countdownAdjusted}.`;
    }
    if (countdown.includes("ago") && parsedCountdown < 1) {
      return ". Starts today!";
    }
  }
  const duration = formatDistanceStrict(
    new Date(trip.startDate),
    new Date(trip.endDate),
    {
      unit: "day",
      roundingMethod: "floor",
    }
  );
  function oneDayTrip() {
    const parsedDuration = duration.replace(/[^0-9]/g, "");

    if (parsedDuration == 0) {
      return "1 day";
    } else {
      return duration;
    }
  }
  return (
    <StyledBody>
      <StyledHeaderDetailPage>
        <StyledBackButtonArea>
          <StyledBackLink href="/" aria-label="Go back to homepage">
            &larr;
          </StyledBackLink>
        </StyledBackButtonArea>
        <h1>My Trips</h1>
        <StyledRightSideDetailPage>
          <ConfirmDelete handleDeleteTrip={handleDeleteTrip} />

          <StyledEditTripButton href={`/trips/${id}/edit`}>
            Edit Trip
          </StyledEditTripButton>
          <StyledgoToPackingListLink href="#packingList" type="button">
            go to packing list
          </StyledgoToPackingListLink>
        </StyledRightSideDetailPage>
      </StyledHeaderDetailPage>
      <StyledDetailPageContent>
        <StyledImageTrip
          src={trip.image?.url}
          width={300}
          height={200}
          alt={`Image for trip`}
        />
        <StyledContent>
          <h2> {trip.title} </h2>
          <StyledDateAndInformation>
            {trip.city}, {trip.country}
            <StyledDateAndInformation>
              Start: {trip.startDate}
            </StyledDateAndInformation>
            <StyledDateAndInformation>
              End: {trip.endDate}
            </StyledDateAndInformation>
            <StyledDateAndInformation>
              Duration: {oneDayTrip()}
              {displayCountdown()}
            </StyledDateAndInformation>
            <StyledDateAndInformation></StyledDateAndInformation>
          </StyledDateAndInformation>
          <h3>My plans</h3>
          <p>{trip.description}</p>
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
          <PackingList
            packingList={trip.packingList}
            onCheck={handleCompletePackingList}
            onEdit={handleEditFromPackingList}
            onRemove={handleDeleteFromPackingList}
          />
        )}
      </StyledPackingList>
    </StyledBody>
  );
}
