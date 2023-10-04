import styled from "styled-components";

const StyledPackingListForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-width: 1px;
  flex-wrap: nowrap;
  flex-basis: 100%;
`;

const StyledPackingListFormInputField = styled.input`
  display: flex;
  flex-grow: 50px;
`;
const StyledPackingListFormInputlabel = styled.label`
  display: flex;
  flex-grow: 50px;
`;

const StyledAddItemButton = styled.button`
  display: flex;
`;

export default function PackingListForm({ onHandleAddToPackingList }) {
  async function handleSubmit(event) {
    event.preventDefault();

    const newItem = event.target.name.value;
    onHandleAddToPackingList(newItem);
    event.target.name.value = "";
  }

  return (
    <StyledPackingListForm onSubmit={handleSubmit}>
      <StyledPackingListFormInputlabel htmlFor="name">
        Item Name:
      </StyledPackingListFormInputlabel>
      <StyledPackingListFormInputField
        id="name"
        name="name"
        type="text"
        maxLength="30"
        required
      ></StyledPackingListFormInputField>
      <StyledAddItemButton type="submit"> Add Item</StyledAddItemButton>
    </StyledPackingListForm>
  );
}
