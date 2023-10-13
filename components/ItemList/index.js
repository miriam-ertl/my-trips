import {
  PackingListItem,
  StyledDIVButtonareaPackingList,
} from "@/components/PackingList/PackingList.styled";

import CancelIconGrey from "@/components/Icons/CancelIconGrey.svg";
import DeleteIconGrey from "@/components/Icons/DeleteIconGrey.svg";
import EditIconGrey from "@/components/Icons/EditIconGrey.svg";
import OKIconGrey from "@/components/Icons/OKIconGrey.svg";
import { StyledButtonWhite } from "@/components/WhiteButton/WhiteButton.styled";
import { StyledFormPackingList } from "@/components/PackingListForm/PackingListForm.styled";
import { StyledInputAddTrip } from "@/components/TripForm/TripForm.styled";
import { StyledUList } from "@/components/TripList/TripList.styled";
import { useState } from "react";

export default function ItemList({ items, onCheck, onRemove, onEdit }) {
  const [itemToEdit, setItemToEdit] = useState(null);

  function onSubmit(event) {
    event.preventDefault();
    onEdit(itemToEdit._id, event.target.name.value);
    setItemToEdit(null);
  }

  return (
    <>
      {itemToEdit ? (
        <StyledFormPackingList onSubmit={onSubmit}>
          <StyledInputAddTrip
            name="name"
            defaultValue={itemToEdit.name}
            required
            autoFocus
          />

          <StyledButtonWhite type="submit">
            <OKIconGrey width={15} height={15} />
          </StyledButtonWhite>

          <StyledButtonWhite type="button" onClick={() => setItemToEdit(null)}>
            <CancelIconGrey width={15} height={15} />
          </StyledButtonWhite>
        </StyledFormPackingList>
      ) : (
        <StyledUList>
          {items.map((item) => (
            <PackingListItem key={item._id}>
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
              <StyledDIVButtonareaPackingList>
                <StyledButtonWhite onClick={() => setItemToEdit(item)}>
                  <EditIconGrey width={15} height={15} />
                </StyledButtonWhite>
                <StyledButtonWhite
                  type="button"
                  onClick={() => onRemove(item._id)}
                >
                  <DeleteIconGrey width={15} height={15} />
                </StyledButtonWhite>
              </StyledDIVButtonareaPackingList>
            </PackingListItem>
          ))}
        </StyledUList>
      )}
    </>
  );
}
