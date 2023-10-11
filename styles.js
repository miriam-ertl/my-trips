import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  
  }

  body {
    display: flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
  }
 
 h1 {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.90);
 }

`;
