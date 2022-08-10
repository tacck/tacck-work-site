import * as React from "react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  ThemeOptions,
} from "@mui/material/styles";

import CssReset from "./CssReset";


// declare module "@mui/material/styles" {
//   interface BreakpointOverrides {
//     zero: true;
//     xs: false;
//     sm: true;
//     md: false;
//     lg: true;
//     xl: false;
//   }
// }

// Materil UI Theme setup
export const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: "#4B5F65",
    },
    secondary: {
      main: "#CECCB8",
    },
    success: {
      main: "#B7C6C7",
    },
    info: {
      main: "#E3E6E1",
    },
    warning: {
      main: "#C7B5A8",
    },
    error: {
      main: "#918879",
    },
  },
  // breakpoints: {
  //   values: {
  //     zero: 0,
  //     sm: 564,
  //     lg: 1100,
  //   },
  // },
  components: {
    // MuiTab: {
    //   styleOverrides: {
    //     root: ({ ownerState, theme }) => ({
    //       color: theme.palette.primary.main,
    //       backgroundColor: theme.palette.secondary.main,
    //     }),
    //     selected: {
    //       color: "red",
    //       "&:hover": {
    //         color: "red"
    //       }
    //     }
    //   }
    // },
  },
};

type ThemeProps = {
  children: React.ReactNode;
};

const ThemeProvider = ({ children }: ThemeProps): JSX.Element => (
  <MuiThemeProvider theme={createTheme(themeOptions)}>
    <CssReset />

    {children}
  </MuiThemeProvider>
);

export default ThemeProvider;
