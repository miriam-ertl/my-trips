import {
  StyledButtonBlueAddItem,
  StyledFormPackingList,
} from "./PackingListForm.styled";
import {
  StyledInputAddTrip,
  StyledlabelAddTrip,
} from "../TripForm/TripForm.styled";

import AddIconW from "@/components/Icons/AddIconW.svg";
import { StyledPButtonTypo } from "../PButtonTypo/PButtonTypo.styled";

export default function PackingListForm({ onHandleAddToPackingList }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const newItem = event.target.name.value;
    onHandleAddToPackingList(newItem);
    event.target.name.value = "";
  }

  return (
    <StyledFormPackingList onSubmit={handleSubmit}>
      <StyledlabelAddTrip htmlFor="name"></StyledlabelAddTrip>
      <StyledInputAddTrip
        id="name"
        name="name"
        type="text"
        maxLength="30"
        required
      ></StyledInputAddTrip>
      <StyledButtonBlueAddItem type="submit">
        <AddIconW width={15} height={15} />
        <StyledPButtonTypo>ADD</StyledPButtonTypo>
      </StyledButtonBlueAddItem>
    </StyledFormPackingList>
  );
}
