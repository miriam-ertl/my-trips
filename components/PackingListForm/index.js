import {
  StyledAddItemButton,
  StyledPackingListForm,
} from "./PackingListForm.styled";
import {
  StyledInputAddTrip,
  StyledlabelAddTrip,
} from "../TripForm/TripForm.styled";

import AddIcon from "@/components/PackingListForm/AddIcon.svg";
import { StyledButtonTypo } from "../PButtonTypo/PButtonTypo.styled";
export default function PackingListForm({ onHandleAddToPackingList }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const newItem = event.target.name.value;
    onHandleAddToPackingList(newItem);
    event.target.name.value = "";
  }

  return (
    <StyledPackingListForm onSubmit={handleSubmit}>
      <StyledlabelAddTrip htmlFor="name"></StyledlabelAddTrip>
      <StyledInputAddTrip
        id="name"
        name="name"
        type="text"
        maxLength="30"
        required
      ></StyledInputAddTrip>
      <StyledAddItemButton type="submit">
        <AddIcon width={15} height={15} />
        <StyledButtonTypo>ADD</StyledButtonTypo>
      </StyledAddItemButton>
    </StyledPackingListForm>
  );
}
