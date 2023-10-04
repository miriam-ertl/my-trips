import styled from "styled-components";

const StyledPackingListForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom-style: dashed;
  border-width: 2px;
  flex-wrap: nowrap;
  padding: 5px;
  align-items: baseline;
`;
const StyledAddItemButton = styled.button`
  width: 50px;
  height: 20px;
  margin: 2px 2px 2px 5px;
  display: flex;
  justify-content: center;
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
      <label htmlFor="name">{/* Item Name: */}</label>
      <input id="name" name="name" type="text" maxLength="30" required></input>
      <StyledAddItemButton type="submit">Add</StyledAddItemButton>
    </StyledPackingListForm>
  );
}
