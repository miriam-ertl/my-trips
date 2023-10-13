import { StyledButtonBlue } from "@/components/ConfirmDelete/ConfirmDelete.styled";
import { StyledLink } from "../Details/Details.styled";
import { StyledPButtonTypo } from "../PButtonTypo/PButtonTypo.styled";
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
            <StyledPButtonTypo>YES</StyledPButtonTypo>
          </StyledButtonBlue>
        </div>
      </StyledLink>
      <div>
        <StyledButtonBlue type="button" onClick={() => setShowMessage(false)}>
          <StyledPButtonTypo>NO</StyledPButtonTypo>
        </StyledButtonBlue>
      </div>
    </div>
  );
}
