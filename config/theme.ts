import { createTheme } from "@local-mui";
import { MajorControlTitleTypographyVariant } from "data/predefined";

const primaryColor = "#6A983C";
const primaryDark = "#151515";

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
          boxShadow: "none",
          ["&:hover"]: {
            boxShadow: "none",
          },
        },
      },
    },
  },
});

export default theme;
