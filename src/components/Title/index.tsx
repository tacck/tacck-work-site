import React from "react";

import { Typography, Box, Stack } from "@mui/material";
import { grey } from '@mui/material/colors';
import {
  // createTheme,
  // ThemeProvider as MuiThemeProvider,
  styled
} from "@mui/material/styles";

// import TacckFont from '../../../static/fonts/tacckfont.woff2';
import "./TacckFont.css";

// const TacckFontTheme = createTheme({
//   // typography: {
//   //   fontFamily: 'TacckFont',
//   // },
//   // components: {
//   //   MuiCssBaseline: {
//   //     styleOverrides: `
//   //       @font-face {
//   //         font-family: 'TacckFont';
//   //         font-style: normal;
//   //         font-display: swap;
//   //         src: url("../../../static/fonts/tacckfont.ttf") format('ttf');
//   //       }
//   //     `,
//   //   },
//   // },
//   palette: {
//     primary: {
//       main: "#4B5F65",
//     },
//     secondary: {
//       main: "#CECCB8",
//     },
//     success: {
//       main: "#B7C6C7",
//     },
//     info: {
//       main: "#E3E6E1",
//     },
//     warning: {
//       main: "#C7B5A8",
//     },
//     error: {
//       main: "#918879",
//     },
//   },
// });

const TitleStyle = styled('div')(
  ({theme}) => ({
    fontSize: '2.5rem',
    lineHeight: '2ex',
    textAlign: 'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: '3rem',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '5rem',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '6rem',
    },
  })
);

const Title = (): JSX.Element => (
  <Stack
    component="title"
    justifyContent="center"
    alignItems="center"
    spacing={2}
    sx={{
      color: grey[100],
      bgcolor: "primary.main",
      lineHeight: '2ex',
          textAlign: 'center',
          fontSize: {
            xs: "2.5rem",
            sm: "3rem",
            md: "5rem",
            lg: "6rem",
          }
    }}
    className="tacck-font"
  >
    Tacck Work
    {/* <Stack justifyContent="center" alignItems="center">
      <Box className="tacck-font" sx={{
          lineHeight: '2ex',
          textAlign: 'center',
          fontSize: {
            xs: "2.5rem",
            sm: "3rem",
            md: "5rem",
            lg: "6rem",
          }
        }}>Tacck Work</Box>
    </Stack> */}
  </Stack>
);

export default Title;
