export default function PackingListForm({ onHandleAddToPackingList }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const newItem = event.target.name.value;
    console.log("submit", newItem);
    onHandleAddToPackingList(newItem);
  }

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
