import {
  StyledButtonPostionAddTrip,
  StyledDIVAddTrip,
  StyledFieldsetAddTrip,
  StyledFormAddTrip,
  StyledInputAddTrip,
  StyledPNoteAddTrip,
  StyledTextareaAddTrip,
  StyledlabelAddTrip,
} from "./TripForm.styled";

import ConfirmationMessage from "../ConfirmationMessage";
import { useRouter } from "next/router";
import { useState } from "react";

export default function TripForm() {
  const [letters, setLetters] = useState(150);
  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const tripData = Object.fromEntries(formData);
    const response = await fetch("/api/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tripData),
    });
    if (!response.ok) {
      console.error(response.status);
      return;
    }

    router.push("/confirmation");
  }

  function handleCountLetters(event) {
    setLetters(150 - parseInt(event.target.value.length, 10));
  }

  return (
    <StyledFormAddTrip onSubmit={handleSubmit}>
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
          />
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
          />
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
          />
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
          />
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
          />
        </StyledDIVAddTrip>

        <StyledDIVAddTrip>
          <StyledlabelAddTrip htmlFor="image">Image (URL)*</StyledlabelAddTrip>
          <StyledInputAddTrip
            id="image"
            name="image"
            type="text"
            placeholder="For example www.my-image.com"
            required
          />
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
            onChange={handleCountLetters}
          ></StyledTextareaAddTrip>
        </StyledDIVAddTrip>
        <StyledButtonPostionAddTrip>
          <button type="submit">+ Add Trip</button>
          <ConfirmationMessage button={"Cancel"} />
        </StyledButtonPostionAddTrip>
      </StyledFieldsetAddTrip>
      <StyledPNoteAddTrip>* required form field</StyledPNoteAddTrip>
    </StyledFormAddTrip>
  );
}
