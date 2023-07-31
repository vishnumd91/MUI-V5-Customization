import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  palette: {
    type: "light",
    // Customize other colors and options for the light theme
    primary: {
      main: "#2f749a",
    },
    secondary: {
      main: "#6c757d",
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    type: "dark",
    // Customize other colors and options for the dark theme
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
});
