import CancelIconGrey from "@/components/Icons/CancelIconGrey.svg";
import OKIconGrey from "@/components/Icons/OKIconGrey.svg";
import { StyledInputAddTrip } from "../TripForm/TripForm.styled";
import { StyledList } from "@/components/TripList/TripList.styled";
import { StyledPackingListForm } from "../PackingListForm/PackingListForm.styled";
import { WhiteButton } from "../WhiteButton/WhiteButton.styled";
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

          <button type="submit">
            <OKIconGrey width={15} height={15} />
          </button>

          <button type="button" onClick={() => setItemToEdit(null)}>
            <CancelIconGrey width={15} height={15} />
          </button>
        </StyledPackingListForm>
      ) : (
        <StyledList>
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
              <WhiteButton onClick={() => setItemToEdit(item)}>
                &#9998;
              </WhiteButton>
              <WhiteButton type="button" onClick={() => onRemove(item._id)}>
                &#10060;
              </WhiteButton>
            </li>
          ))}
        </StyledList>
      )}
    </section>
  );
}
