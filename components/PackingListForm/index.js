//import { useRouter } from "next/router";

export default function AddPackingListItem({ onHandleAddToPackingList }) {
  //add prop (onHandleAddToPackingList)
  async function handleSubmit(event) {
    event.preventDefault();

    const newItem = event.target.name.value;
    console.log("submit", newItem);
    onHandleAddToPackingList(newItem);
  }
  // add: onHandleAddToPackingList + newItem, dass mit dem Event verbunden ist

  //const router = useRouter(); ->wird nicht mehr gebraucht

  //falsche Methode:  Statt neue Daten, wollen wir die Liste updaten
  // const formData = new FormData(event.target);
  //     const tripData = Object.fromEntries(formData);
  //     const response = await fetch("/api/trips", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(tripData),
  //     });
  //     if (!response.ok) {
  //       console.error(response.status);
  //       return;
  //     }

  //     router.push("/confirmation");

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

  //fieldset wird nicht benötigt
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Item Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          maxLength="30"
          required
        ></input>
        <button type="submit"> Add Item</button>
      </form>
    </main>
  );
}
