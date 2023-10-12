import {
  StyledButtonPostionAddTrip,
  StyledDIVAddTrip,
  StyledFieldsetAddTrip,
  StyledFormAddTrip,
  StyledInputAddTrip,
  StyledPNoteAddTrip,
  StyledTextareaAddTrip,
  StyledlabelAddTrip,
} from "@/components/TripForm/TripForm.styled";

import ConfirmDelete from "@/components/ConfirmDelete";
import ConfirmationMessage from "@/components/ConfirmationMessage";
import Link from "next/link";
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function EditTrip() {
  const { mutate } = useSWR("/api/trips");
  const router = useRouter();
  const { id } = router.query;
  const { data: trips, isLoading } = useSWR(
    id ? `/api/trips/${id}` : null,
    fetcher
  );

  if (!trips || isLoading) {
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
    router.push("/");
  }

  async function handleDeleteTrip() {
    await fetch(`/api/trips/${id}`, {
      method: "DELETE",
    });
    router.push("/");
  }

  return (
    <main>
      <Link href="/">&larr;</Link>
      <h1>My Trips</h1>
      <h2>Edit a Trip</h2>
      <StyledFormAddTrip onSubmit={handleEdit} defaultData={trips}>
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
              defaultValue={trips.title}
            ></StyledInputAddTrip>
          </StyledDIVAddTrip>
          <StyledDIVAddTrip>
            <StyledlabelAddTrip htmlFor="startDate">
              Starting date (dd/mm/yyyy)*
            </StyledlabelAddTrip>
            <StyledInputAddTrip
              id="startDate"
              name="startDate"
              type="date"
              required
              defaultValue={trips.startDate}
            ></StyledInputAddTrip>
          </StyledDIVAddTrip>

          <StyledDIVAddTrip>
            <StyledlabelAddTrip htmlFor="endDate">
              Ending date (dd/mm/yyyy)*
            </StyledlabelAddTrip>
            <StyledInputAddTrip
              id="endDate"
              name="endDate"
              type="date"
              required
              defaultValue={trips.endDate}
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
              defaultValue={trips.city}
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
              defaultValue={trips.country}
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
              defaultValue={trips.image}
            ></StyledInputAddTrip>
          </StyledDIVAddTrip>

          <StyledDIVAddTrip>
            <StyledlabelAddTrip htmlFor="description">
              Description (max. 150 characters)*
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
              defaultValue={trips.description}
            ></StyledTextareaAddTrip>
            <p>150 characters left</p>
          </StyledDIVAddTrip>
          <StyledButtonPostionAddTrip>
            <button type="submit">Edit trip</button>
            <ConfirmationMessage button={"Cancel"} />
            <ConfirmDelete handleDeleteTrip={handleDeleteTrip} />
          </StyledButtonPostionAddTrip>
        </StyledFieldsetAddTrip>
        <StyledPNoteAddTrip>* required form field</StyledPNoteAddTrip>
      </StyledFormAddTrip>
    </main>
  );
}
