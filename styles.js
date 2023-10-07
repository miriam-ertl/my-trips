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
    font-family: system-ui;
  }
 
 

`;
