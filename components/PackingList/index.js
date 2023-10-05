import ItemList from "../ItemList";

export default function PackingList({
  packingList,
  onCheck,
  onEdit,
  onRemove,
}) {
  const checkedItems = packingList.filter((listItem) => listItem.checked);
  const uncheckedItems = packingList.filter((listItem) => !listItem.checked);

  return (
    <>
      {checkedItems.length ? (
        <section>
          <h2>Done:</h2>
          <ItemList
            items={checkedItems}
            onCheck={onCheck}
            onEdit={onEdit}
            onRemove={onRemove}
          />
          {checkedItems.length === packingList.length ? (
            <p>Congratulations, you have checked everything!</p>
          ) : null}
        </section>
      ) : null}
      {uncheckedItems.length ? (
        <section>
          <h2>Unchecked Items</h2>
          <ItemList
            items={uncheckedItems}
            // items={checkedItems}
            onCheck={onCheck}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        </section>
      ) : null}
    </>
  );
}

/*
{ !trip.packingList.length
    ? <p>Your packing list is empty.</p>
    : <PackingList packingList={trip.packingList} .../>*/
