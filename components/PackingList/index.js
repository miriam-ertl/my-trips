export default function PackingList({ packingList, onCheck, onRemove }) {
  const checkedItems = packingList.filter((listItem) => listItem.checked);
  const uncheckedItems = packingList.filter((listItem) => !listItem.checked);

  return (
    <>
      {checkedItems.length ? (
        <section>
          <h2>Checked Items</h2>
          <ItemList
            items={checkedItems}
            onCheck={onCheck}
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
            items={checkedItems}
            onCheck={onCheck}
            onRemove={onRemove}
          />
        </section>
      ) : null}
    </>
  );
}
