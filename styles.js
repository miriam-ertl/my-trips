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

 h2 {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.90);
  
 }
 h3 {
  font-size: 1rem;
  font-weight: 700;
  color: rgba(0, 0, 0, 0.90);
  margin-bottom: 0.3rem;
 }

 p {
  font-size: 1rem;
  font-weight: 400;
  color: rgba(0, 0, 0, 0.90);
  margin-top: 0;
 }


`;
