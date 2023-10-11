import ConfirmDelete from "@/components/ConfirmDelete";
import ConfirmationMessage from "@/components/ConfirmationMessage";
import Link from "next/link";
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
  console.log(trip.description);
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

          <label htmlFor="startDate">Starting date (dd/mm/yyyy)*</label>
          <input
            id="startDate"
            name="startDate"
            type="date"
            required
            defaultValue={trip.startDate}
          ></input>

          <label htmlFor="endDate">Ending date (dd/mm/yyyy)*</label>
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

          <label htmlFor="image">Image (URL)*</label>
          <input
            id="image"
            name="image"
            type="text"
            placeholder="For example www.my-image.com"
            required
            defaultValue={trip.image}
          ></input>

          <label htmlFor="description">
            Description * 150/<span>{letters}</span> characters left
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
