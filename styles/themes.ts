import { extendTheme } from "@chakra-ui/react";

export const themes = extendTheme({
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    highlight: "#FFBA08",
    dark_heading_and_text: "#47585B",
    light_heading_and_text: "#F5F8FA",
    dark_info: "#999999",
    ligth_info: "#DADADA",
  },
  fontSizes: {
    sm: "0.875rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "2.75xl": "1.75rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  lineHeights: {
    "5.5": "1.31rem",
    "6.25": "1.563rem",
    "6.5": "1.625rem",
    "6.75": "1.7rem",
    "7.5": "1.875rem",
    "9": "2.25rem",
    "11": "2.625rem",
    "13.5": "3.375rem",
    "18": "4.5rem",
  },
});
