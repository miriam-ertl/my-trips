import { useRouter } from "next/router";
//import useSWR from "swr";

export default function AddPackingListItem() {
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

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // export default function AddPackingListItem() {
  //   const { mutate } = useSWR("/api/trips");
  //   const router = useRouter();
  //   const { id } = router.query;

  //   const { data: trips, isLoading } = useSWR(
  //     id ? `/api/trips/${id}` : null,
  //     fetcher
  //   );

  //   if (!trips || isLoading) {
  //     return <h2>is Loading...</h2>;
  //   }

  //   async function handleAddPackingItem(event) {
  //     event.preventDefault();
  //     const formData = new FormData(event.target);
  //     const tripData = Object.fromEntries(formData);

  //     const response = await fetch(`/api/trips/${id}`, {
  //       method: "PUT",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(tripData),
  //     });
  //     if (response.ok) {
  //       mutate();
  //       router.push("/");
  //     }
  //   }
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label htmlFor="name">Item</label>
          <input
            id="name"
            name="name"
            type="text"
            maxLength="30"
            required
          ></input>
        </fieldset>
        <button type="submit"> Add Item</button>
      </form>
    </main>
  );
}
