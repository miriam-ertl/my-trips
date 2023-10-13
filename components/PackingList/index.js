import ItemList from "@/components/ItemList/index";
//

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
      {uncheckedItems.length ? (
        <section>
          <ItemList
            items={uncheckedItems}
            onCheck={onCheck}
            onEdit={onEdit}
            onRemove={onRemove}
          />
          {checkedItems.length === packingList.length ? (
            <h3>Congratulations, you have checked everything!</h3>
          ) : null}
        </section>
      ) : null}
      {checkedItems.length ? (
        <section>
          <h3>Done:</h3>
          <ItemList
            items={checkedItems}
            onCheck={onCheck}
            onEdit={onEdit}
            onRemove={onRemove}
          />
        </section>
      ) : null}
    </>
  );
}
