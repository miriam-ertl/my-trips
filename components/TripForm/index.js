import {
  StyledButtonPostionAddTrip,
  StyledCityAddTrip,
  StyledCountryAddTrip,
  StyledDescriptionAddTrip,
  StyledEndDateAddTrip,
  StyledFieldsetAddTrip,
  StyledFormAddTrip,
  StyledImageAddTrip,
  StyledInputAddTrip,
  StyledStartDateAddTrip,
  StyledTextareaAddTrip,
  StyledTitleAddTrip,
  StyledlabelAddTrip,
} from "./TripForm.styled";

import ConfirmationMessage from "../ConfirmationMessage";
import { useRouter } from "next/router";

export default function TripForm() {
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

  return (
    <StyledFormAddTrip onSubmit={handleSubmit}>
      <StyledFieldsetAddTrip>
        <StyledTitleAddTrip>
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
        </StyledTitleAddTrip>

        <StyledStartDateAddTrip>
          <StyledlabelAddTrip htmlFor="startDate">
            Starting date (dd/mm/yyyy)*
          </StyledlabelAddTrip>
          <StyledInputAddTrip
            id="startDate"
            name="startDate"
            type="date"
            required
          />
        </StyledStartDateAddTrip>

        <StyledEndDateAddTrip>
          <StyledlabelAddTrip htmlFor="endDate">
            Ending date (dd/mm/yyyy)*
          </StyledlabelAddTrip>
          <StyledInputAddTrip
            id="endDate"
            name="endDate"
            type="date"
            required
          />
        </StyledEndDateAddTrip>

        <StyledCityAddTrip>
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
        </StyledCityAddTrip>

        <StyledCountryAddTrip>
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
        </StyledCountryAddTrip>

        <StyledImageAddTrip>
          <StyledlabelAddTrip htmlFor="image">Image (URL)*</StyledlabelAddTrip>
          <StyledInputAddTrip
            id="image"
            name="image"
            type="text"
            placeholder="For example www.my-image.com"
            required
          />
        </StyledImageAddTrip>

        <StyledDescriptionAddTrip>
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
          ></StyledTextareaAddTrip>
          <p>150 characters left</p>
        </StyledDescriptionAddTrip>
        <StyledButtonPostionAddTrip>
          <button type="submit">+ Add Trip</button>
          <ConfirmationMessage button={"Cancel"} />
        </StyledButtonPostionAddTrip>
      </StyledFieldsetAddTrip>
      <p>* required form field</p>
    </StyledFormAddTrip>
  );
}
