export default function ItemList({ items, onCheck, onRemove }) {
  return (
    <ul>
      {items.map(({ _id, name, checked }) => (
        <li key={_id}>
          <input
            type="checkbox"
            defaultChecked={false}
            onCheck={() => handleCompletePackingList(_id)}
          />
          <span
            style={{
              textDecoration: checked ? "line-through" : "none",
            }}
          >
            {name}
          </span>
          <button
            type="button"
            onRemove={() => handleDeleteFromPackingList(_id)}
          >
            &#10060;
          </button>
        </li>
      ))}
    </ul>
  );
}
