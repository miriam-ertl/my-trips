import {
  StyledCityAddTrip,
  StyledCountryAddTrip,
  StyledDescriptionAddTrip,
  StyledEndDateAddTrip,
  StyledFormAddTrip,
  StyledImageAddTrip,
  StyledStartDateAddTrip,
  StyledTitleAddTrip,
} from "./TripForm.styled";

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
    <StyledFormAddTrip>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <StyledTitleAddTrip>
            <label htmlFor="title">Title (max. 30 characters)*</label>
            <input
              id="title"
              name="title"
              type="text"
              maxLength="30"
              required
            />
          </StyledTitleAddTrip>
          <StyledStartDateAddTrip>
            <label htmlFor="startDate">Starting date (dd/mm/yyyy)*</label>
            <input id="startDate" name="startDate" type="date" required />
          </StyledStartDateAddTrip>
          <StyledEndDateAddTrip>
            <label htmlFor="endDate">Ending date (dd/mm/yyyy)*</label>
            <input id="endDate" name="endDate" type="date" required />
          </StyledEndDateAddTrip>

          <StyledCityAddTrip>
            <label htmlFor="city">City (max. 30 characters)*</label>
            <input id="city" name="city" type="text" maxLength="30" required />
          </StyledCityAddTrip>

          <StyledCountryAddTrip>
            <label htmlFor="country">Country (max. 30 characters)*</label>
            <input
              id="country"
              name="country"
              type="text"
              maxLength="30"
              required
            />
          </StyledCountryAddTrip>

          <StyledImageAddTrip>
            <label htmlFor="image">Image (URL)*</label>
            <input
              id="image"
              name="image"
              type="text"
              placeholder="For example www.my-image.com"
              required
            />
          </StyledImageAddTrip>

          <StyledDescriptionAddTrip>
            <label htmlFor="description">
              Description (max. 150 characters)*
            </label>
            <textarea
              rows="8"
              cols="30"
              maxLength="150"
              id="description"
              name="description"
              type="text"
              required
              placeholder="Enter your description"
            ></textarea>
            <p>150 characters left</p>
          </StyledDescriptionAddTrip>
          <button type="submit">+ Add Trip</button>
        </fieldset>
        <p>* required form field</p>
      </form>
    </StyledFormAddTrip>
  );
}
