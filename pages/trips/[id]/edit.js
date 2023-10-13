import {
  StyledButtonPostionAddTrip,
  StyledDIVAddTrip,
  StyledFieldsetAddTrip,
  StyledFormAddTrip,
  StyledHeadAddTrip,
  StyledInputAddTrip,
  StyledPNoteAddTrip,
  StyledTextareaAddTrip,
  StyledlabelAddTrip,
} from "@/components/TripForm/TripForm.styled";

import BackIconW from "@/components/Icons/BackIconW.svg";
import ConfirmDelete from "@/components/ConfirmDelete";
import ConfirmationMessage from "@/components/ConfirmationMessage";
import EditTripButton from "@/components/EditTripButton";
import OKIconW from "@/components/Icons/OKIconW.svg";
import { StyledBackButton } from "@/components/BackButton/BackButton.styled";
import { StyledButtonTypo } from "@/components/PButtonTypo/PButtonTypo.styled";
import { StyledDeleteButton } from "@/components/ConfirmDelete/ConfirmDelete.styled";
import { StyledLink } from "@/components/Details/Details.styled";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EditTrip() {
  const { mutate } = useSWR("/api/trips");
  const router = useRouter();
  const { id } = router.query;
  const { data: trip, isLoading } = useSWR(
    id ? `/api/trips/${id}` : null,
    fetcher
  );
  const [letters, setLetters] = useState(
    trip ? 150 - trip.description.length : null
  );
  if (!trip || isLoading) {
    return <h2>is Loading...</h2>;
  }

  async function handleEdit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const tripData = Object.fromEntries(formData);
    const response = await fetch(`/api/trips/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
    });

    if (response.ok) {
      mutate();
    }
    router.push(`/trips/${id}`);
  }

  async function handleDeleteTrip() {
    await fetch(`/api/trips/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  function handleCountLetters(event) {
    setLetters(150 - parseInt(event.target.value.length, 10));
  }

  return (
    <main>
      <StyledHeadAddTrip>
        <StyledLink href="/">
          <StyledBackButton>
            <BackIconW width={15} height={15} />
          </StyledBackButton>
        </StyledLink>

        <h1>My Trips</h1>
      </StyledHeadAddTrip>

      <h2>Edit a Trip</h2>
      <StyledFormAddTrip onSubmit={handleEdit}>
        <StyledFieldsetAddTrip>
          <StyledDIVAddTrip>
            <StyledlabelAddTrip htmlFor="title">
              Title (max. 30 characters)*
            </StyledlabelAddTrip>
            <StyledInputAddTrip
              id="title"
              name="title"
              type="text"
              maxLength="30"
              required
              defaultValue={trip.title}
            ></StyledInputAddTrip>
          </StyledDIVAddTrip>
          <StyledDIVAddTrip>
            <StyledlabelAddTrip htmlFor="startDate">
              Start Date (dd/mm/yyyy)*
            </StyledlabelAddTrip>
            <StyledInputAddTrip
              id="startDate"
              name="startDate"
              type="date"
              required
              defaultValue={trip.startDate}
            ></StyledInputAddTrip>
          </StyledDIVAddTrip>

          <StyledDIVAddTrip>
            <StyledlabelAddTrip htmlFor="endDate">
              End Date (dd/mm/yyyy)*
            </StyledlabelAddTrip>
            <StyledInputAddTrip
              id="endDate"
              name="endDate"
              type="date"
              required
              defaultValue={trip.endDate}
            ></StyledInputAddTrip>
          </StyledDIVAddTrip>

          <StyledDIVAddTrip>
            <StyledlabelAddTrip htmlFor="city">
              City (max. 30 characters)*
            </StyledlabelAddTrip>
            <StyledInputAddTrip
              id="city"
              name="city"
              type="text"
              maxLength="30"
              required
              defaultValue={trip.city}
            ></StyledInputAddTrip>
          </StyledDIVAddTrip>

          <StyledDIVAddTrip>
            <StyledlabelAddTrip htmlFor="country">
              Country (max. 30 characters)*
            </StyledlabelAddTrip>
            <StyledInputAddTrip
              id="country"
              name="country"
              type="text"
              maxLength="30"
              required
              defaultValue={trip.country}
            ></StyledInputAddTrip>
          </StyledDIVAddTrip>

          <StyledDIVAddTrip>
            <StyledlabelAddTrip htmlFor="image">
              Image (URL)*
            </StyledlabelAddTrip>
            <StyledInputAddTrip
              id="image"
              name="image"
              type="text"
              placeholder="For example www.my-image.com"
              required
              defaultValue={trip.image}
            ></StyledInputAddTrip>
          </StyledDIVAddTrip>

          <StyledDIVAddTrip>
            <StyledlabelAddTrip htmlFor="description">
              Description (<span>{letters}</span> characters left)*
            </StyledlabelAddTrip>
            <StyledTextareaAddTrip
              rows="8"
              cols="30"
              maxLength="150"
              id="description"
              name="description"
              type="text"
              required
              placeholder="Enter your description"
              defaultValue={trip.description}
              onChange={handleCountLetters}
            ></StyledTextareaAddTrip>
          </StyledDIVAddTrip>

          <StyledButtonPostionAddTrip>
            <StyledDeleteButton type="submit">
              <OKIconW width={15} height={15} />
              <StyledButtonTypo>OK</StyledButtonTypo>
            </StyledDeleteButton>

            <ConfirmationMessage button={"Cancel"} />

            <ConfirmDelete handleDeleteTrip={handleDeleteTrip} />
          </StyledButtonPostionAddTrip>
        </StyledFieldsetAddTrip>
        <StyledPNoteAddTrip>* required form field</StyledPNoteAddTrip>
      </StyledFormAddTrip>
    </main>
  );
}
