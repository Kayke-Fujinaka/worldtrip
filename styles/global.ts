import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      -webkit-font-smoothing: antialiased;
    }

    body,
    input,
    textarea,
    button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }
    
    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }
`;

export default GlobalStyle;
