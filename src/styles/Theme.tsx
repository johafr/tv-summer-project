import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    primaryText: Palette["primary"];
  }
  interface PaletteOptions {
    primaryText: PaletteOptions["primary"];
  }
}

export const Theme = createTheme({
  palette: {
    primary: {
      main: "#407178",
      dark: "#306168",
      light: "#508188",
    },
    secondary: {
      main: "#9ca9ea",
      dark: "#8ca9ea",
      light: "#a3afea",
    },
    primaryText: {
      main: "#",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
