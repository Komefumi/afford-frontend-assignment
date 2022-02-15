// import createTheme from "@mui/material/styles/createTheme";
// import { createTheme } from "@mui/material";
import { createTheme } from "@local-mui";
import type { ThemeOptions } from "@local-mui";
// import { createTheme } from "@local-mui";

const primaryColor = "#6A983C";
const primaryDark = "#151515";

/*
const themeOptions: ThemeWithProps = {
  palette: {
    primary: {
      main: primaryColor,
    },
  },
  typography: {
    allVariants: {
      color: primaryDark,
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
        containedPrimary: {
          backgroundColor: primaryColor,
          color: "#fefefe",
          fontWeight: 600,
          borderRadius: "12px",
        },
      },
    },
  },
};
 */

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
  },
  typography: {
    allVariants: {
      color: primaryDark,
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "capitalize",
        },
        containedPrimary: {
          backgroundColor: primaryColor,
          color: "#fefefe",
          fontWeight: 600,
          borderRadius: "12px",
          height: "40px",
          border: "2px solid darkgreen",
        },
      },
    },
  },
});

export default theme;
