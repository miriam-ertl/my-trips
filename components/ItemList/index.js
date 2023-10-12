import { StyledInputAddTrip } from "../TripForm/TripForm.styled";
import { StyledPackingListForm } from "../PackingListForm/PackingListForm.styled";
import { useState } from "react";

export default function ItemList({ items, onCheck, onRemove, onEdit }) {
  const [itemToEdit, setItemToEdit] = useState(null);

  function onSubmit(event) {
    event.preventDefault();
    onEdit(itemToEdit._id, event.target.name.value);
    setItemToEdit(null);
  }

  return (
    <section>
      {itemToEdit ? (
        <StyledPackingListForm onSubmit={onSubmit}>
          <StyledInputAddTrip
            name="name"
            defaultValue={itemToEdit.name}
            required
            autoFocus
          />

          <button type="submit">&#10003;</button>
          <button type="button" onClick={() => setItemToEdit(null)}>
            &#10680;
          </button>
        </StyledPackingListForm>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item._id}>
              <input
                type="checkbox"
                defaultChecked={item.checked}
                onChange={() => onCheck(item._id)}
              />
              <span
                style={{
                  textDecoration: item.checked ? "line-through" : "none",
                }}
              >
                {item.name}
              </span>
              <button onClick={() => setItemToEdit(item)}>&#9998;</button>
              <button type="button" onClick={() => onRemove(item._id)}>
                &#10060;
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
