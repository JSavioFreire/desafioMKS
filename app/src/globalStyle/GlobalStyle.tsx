import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}
  body {
    background-color: var(--background);
  }
  :root{
    --primary: #0F52BA;
    --dark:#373737;
    --background: #E5E5E5;
  }
`
