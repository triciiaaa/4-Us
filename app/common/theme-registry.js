"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import CustomisedTheme from "../common/customised-theme";

export default function ThemeRegistry({ children }) {
  return (
    <ThemeProvider theme={CustomisedTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
