import { createGlobalStyle, css } from "styled-components";

import { Themes } from "./themes";

const GlobalStyle = createGlobalStyle<{ theme: Themes }>`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    body {
      -webkit-font-smoothing: antialiased;
      background-color: ${theme.colors.light_heading_and_text};
    }

    body,
    input,
    textarea,
    button {
      font-family: "Poppins", sans-serif;
      font-weight: 400;
      font-size: 1rem;
    }

    a {
      text-decoration: none;
    }

    ul {
      list-style: none;
    }
  `}
`;

export default GlobalStyle;
