import { createTheme } from "@mui/material/styles";

let CustomisedTheme = createTheme({
  palette: {
    blue: {
      main: "#69C9D0",
      dark: "#5DB1B7",
    },
    pink: {
      main: "#EE1D52",
    },
    black: {
      main: "#000000",
    },
    white: {
      main: "#FFFFFF",
    },
  },
  typography: {
    logo: {
      fontSize: "25px",
      fontWeight: "200",
      fontFamily: "Darumadrop One",
    },
    h1: {
      fontSize: "40px",
      fontWeight: "700",
      fontFamily: "Inter",
    },
    h2: {
      fontSize: "32px",
      fontWeight: "600",
      fontFamily: "Inter",
    },
    h3: {
      fontSize: "26px",
      fontWeight: "600",
      fontFamily: "Inter",
    },
    h4: {
      fontSize: "22px",
      fontWeight: "600",
      fontFamily: "Inter",
    },
    body_bold: {
      fontSize: "16px",
      fontWeight: "600",
      fontFamily: "Inter",
    },
    body_thin: {
      fontSize: "16px",
      fontWeight: "400",
      fontFamily: "Inter",
    },
    tag_bold: {
      fontSize: "14px",
      fontWeight: "600",
      fontFamily: "Inter",
    },
    tag_thin: {
      fontSize: "14px",
      fontWeight: "400",
      fontFamily: "Inter",
    },
    tiny_tag_bold: {
      fontSize: "12px",
      fontWeight: "600",
      fontFamily: "Inter",
    },
  },
});

// CustomisedTheme = responsiveFontSizes(CustomisedTheme);

export default CustomisedTheme;
