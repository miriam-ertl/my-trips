import {
  StyledDIVAddTrip,
  StyledDIVButtonPositionAddTrip,
  StyledDIVHeadAddTrip,
  StyledFieldset,
  StyledFormAddTrip,
  StyledInputAddTrip,
  StyledPNoteAddTrip,
  StyledTextarea,
  StyledlabelAddTrip,
} from "@/components/TripForm/TripForm.styled";

import BackIconW from "@/components/Icons/BackIconW.svg";
import CancelIconW from "@/components/Icons/CancelIconW.svg";
import ConfirmDelete from "@/components/ConfirmDelete";
import ConfirmationMessage from "@/components/ConfirmationMessage";
import OKIconW from "@/components/Icons/OKIconW.svg";
import { StyledButtonBlue } from "@/components/ConfirmDelete/ConfirmDelete.styled";
import { StyledDIVWhiteQuad } from "@/components/BackButton/BackButton.styled";
import { StyledLink } from "@/components/Details/Details.styled";
import { StyledPButtonTypo } from "@/components/PButtonTypo/PButtonTypo.styled";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = "ml_default";

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", UPLOAD_PRESET);
  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );
  const { url, width, height } = await response.json();
  return { url, width, height };
}

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
  const [showFileInput, setShowFileInput] = useState(false);

  if (!trip || isLoading) {
    return <h2>is Loading...</h2>;
  }

  async function handleEdit(event) {
    event.preventDefault();
    let image;
    if (showFileInput) {
      image = await uploadImage(event.target.image.files[0]);
    }
    const formData = new FormData(event.target);
    const tripData = Object.fromEntries(formData);
    const response = await fetch(`/api/trips/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...tripData, image }),
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
      <StyledDIVHeadAddTrip>
        <StyledLink href="/">
          <StyledDIVWhiteQuad>
            <BackIconW width={15} height={15} />
          </StyledDIVWhiteQuad>
        </StyledLink>

        <h1>My Trips</h1>
      </StyledDIVHeadAddTrip>

      <h2>Edit a Trip</h2>
      <StyledFormAddTrip onSubmit={handleEdit}>
        <StyledFieldset>
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
          {showFileInput ? (
            <StyledDIVAddTrip>
              <StyledlabelAddTrip htmlFor="image">
                Image (URL)*
              </StyledlabelAddTrip>
              <StyledInputAddTrip
                id="image"
                name="image"
                type="file"
                required
              ></StyledInputAddTrip>
            </StyledDIVAddTrip>
          ) : (
            <button type="button" onClick={() => setShowFileInput(true)}>
              Upload Image
            </button>
          )}
          <StyledDIVAddTrip>
            <StyledlabelAddTrip htmlFor="description">
              Description (<span>{letters}</span> characters left)*
            </StyledlabelAddTrip>
            <StyledTextarea
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
            ></StyledTextarea>
          </StyledDIVAddTrip>
          <StyledDIVButtonPositionAddTrip>
            <StyledButtonBlue type="submit">
              <OKIconW width={15} height={15} />
              <StyledPButtonTypo>OK</StyledPButtonTypo>
            </StyledButtonBlue>

            <ConfirmationMessage>
              <CancelIconW width={12} height={12} />
              <StyledPButtonTypo>CANCEL</StyledPButtonTypo>
            </ConfirmationMessage>
            <ConfirmDelete handleDeleteTrip={handleDeleteTrip} />
          </StyledDIVButtonPositionAddTrip>
        </StyledFieldset>
        <StyledPNoteAddTrip>* required form field</StyledPNoteAddTrip>
      </StyledFormAddTrip>
    </main>
  );
}
