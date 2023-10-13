import ConfirmDelete from "@/components/ConfirmDelete";
import ConfirmationMessage from "@/components/ConfirmationMessage";
import Link from "next/link";
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
      <Link href="/">&larr;</Link>
      <h1>My Trips</h1>
      <h2>Edit a Trip</h2>
      <form onSubmit={handleEdit}>
        <fieldset>
          <label htmlFor="title">Title (max. 30 characters)*</label>
          <input
            id="title"
            name="title"
            type="text"
            maxLength="30"
            required
            defaultValue={trip.title}
          ></input>

          <label htmlFor="startDate">Start Date (dd/mm/yyyy)*</label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            required
            defaultValue={trip.startDate}
          ></input>

          <label htmlFor="endDate">End Date (dd/mm/yyyy)*</label>
          <input
            id="endDate"
            name="endDate"
            type="date"
            required
            defaultValue={trip.endDate}
          ></input>

          <label htmlFor="city">City (max. 30 characters)*</label>
          <input
            id="city"
            name="city"
            type="text"
            maxLength="30"
            required
            defaultValue={trip.city}
          ></input>

          <label htmlFor="country">Country (max. 30 characters)*</label>
          <input
            id="country"
            name="country"
            type="text"
            maxLength="30"
            required
            defaultValue={trip.country}
          ></input>
          {showFileInput ? (
            <>
              <label htmlFor="image">Image (URL)*</label>
              <input id="image" name="image" type="file" required></input>
            </>
          ) : (
            <button type="button" onClick={() => setShowFileInput(true)}>
              Upload Image
            </button>
          )}
          <label htmlFor="description">
            Description (<span>{letters}</span> characters left)*
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
            defaultValue={trip.description}
            onChange={handleCountLetters}
          ></textarea>

          <button type="submit">Edit trip</button>
        </fieldset>
        <p>* required form field</p>
      </form>

      <ConfirmationMessage button="Cancel" />
      <ConfirmDelete handleDeleteTrip={handleDeleteTrip} />
    </main>
  );
}
