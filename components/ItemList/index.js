import { useState } from "react";

export default function ItemList({ name, items, onCheck, onRemove }) {
  const [isEditing, setEditing] = useState(false);

  function onSubmit(event) {
    event.preventDefault();
    handleEditFromPackingList(id, event.target.name.value);
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
          <button>&#10003;</button>
          <button type="button" onEdit={() => setEditing(false)}>
            &#10680;
          </button>
        </form>
      ) : (
        <ul>
          {items.map(({ _id, name, checked }) => (
            <li key={_id}>
              <input type="checkbox" defaultChecked={false} onCheck={onCheck} />
              <span
                style={{
                  textDecoration: checked ? "line-through" : "none",
                }}
              >
                {name}
              </span>
              <button onEdit={() => setEditing(true)}>&#9998;</button>
              <button type="button" onRemove={onRemove}>
                &#10060;
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
