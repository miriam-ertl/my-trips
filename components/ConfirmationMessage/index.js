import { StyledButtonBlue } from "@/components/ConfirmDelete/ConfirmDelete.styled";
import { StyledButtonTypo } from "../PButtonTypo/PButtonTypo.styled";
import { StyledLink } from "../Details/Details.styled";
import { useState } from "react";

export default function ConfirmationMessage({ children }) {
  const [showMessage, setShowMessage] = useState(false);

  if (!showMessage) {
    return (
      <StyledButtonBlue type="button" onClick={() => setShowMessage(true)}>
        {children}
      </StyledButtonBlue>
    );
  }

  return (
    <div>
      <p>Are you sure?</p>
      <StyledLink href="/">
        <div>
          <StyledButtonBlue type="button">
            <StyledButtonTypo>YES</StyledButtonTypo>
          </StyledButtonBlue>
        </div>
      </StyledLink>
      <div>
        <StyledButtonBlue type="button" onClick={() => setShowMessage(false)}>
          <StyledButtonTypo>NO</StyledButtonTypo>
        </StyledButtonBlue>
      </div>
    </div>
  );
}
