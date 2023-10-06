import { useState } from "react";

export default function ItemList({ name, items, onCheck, onRemove, onEdit }) {
  const [isEditing, setEditing] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    onEdit(_id, event.target.name.value);
    setEditing(false);
  }

  return (
    <section>
      {isEditing ? (
        <form onSubmit={onSubmit}>
          <label>
            <input
              name="name"
              placeholder="Edit your item"
              defaultValue={name}
              required
              autoFocus
            />
          </label>
          <button type="submit">&#10003;</button>
          <button type="button" onClick={() => setEditing(false)}>
            &#10680;
          </button>
        </form>
      ) : (
        <ul>
          {items.map(({ _id, name, checked }) => (
            <li key={_id}>
              <input
                type="checkbox"
                defaultChecked={checked}
                onChange={() => onCheck(_id)}
              />
              <span
                style={{
                  textDecoration: checked ? "line-through" : "none",
                }}
              >
                {name}
              </span>
              <button onClick={() => setEditing(true)}>&#9998;</button>
              <button type="button" onClick={() => onRemove(_id)}>
                &#10060;
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
