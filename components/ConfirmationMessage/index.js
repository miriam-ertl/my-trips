import { StyledButtonTypo } from "../PButtonTypo/PButtonTypo.styled";
import { StyledDeleteButton } from "@/components/ConfirmDelete/ConfirmDelete.styled";
import { StyledLink } from "../Details/Details.styled";
import { useState } from "react";

export default function ConfirmationMessage({ children }) {
  const [showMessage, setShowMessage] = useState(false);

  if (!showMessage) {
    return (
      <div>
        <StyledDeleteButton type="button" onClick={() => setShowMessage(true)}>
          {children}
        </StyledDeleteButton>
      </div>
    );
  }

  return (
    <div>
      <p>Are you sure?</p>
      <StyledLink href="/">
        <StyledDeleteButton type="button">Yes</StyledDeleteButton>
      </StyledLink>
      <StyledDeleteButton type="button" onClick={() => setShowMessage(false)}>
        No
      </StyledDeleteButton>
    </div>
  );
}
