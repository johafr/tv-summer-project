import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    primaryText: Palette["primary"];
    mainGreen: Palette["primary"];
    black: Palette["primary"];
  }
  interface PaletteOptions {
    primaryText: PaletteOptions["primary"];
    mainGreen: PaletteOptions["primary"];
    black: PaletteOptions["primary"];
  }
}

export const Theme = createTheme({
  palette: {
    mainGreen: {
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
    black: {
      main: "#262626",
    },
  },
  typography: {
    fontFamily: "Montserrat",
  },
});
