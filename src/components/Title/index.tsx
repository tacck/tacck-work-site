import React from "react";

import { Typography, Stack } from "@mui/material";
import { grey } from '@mui/material/colors';
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
  styled
} from "@mui/material/styles";

// import TacckFont from '../../fonts/tacckfont.woff2';

const TacckFontTheme = createTheme({
  typography: {
    fontFamily: 'TacckFont',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'TacckFont';
          font-style: normal;
          src: url("../../fonts/tacckfont.woff2") format('woff2');
        }
      `,
    },
  },
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
});

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
    }}
  >
    <Stack justifyContent="center" alignItems="center">
      <MuiThemeProvider theme={TacckFontTheme}>
        <Typography variant="h1">
            <TitleStyle>Tacck Work</TitleStyle>
        </Typography>
      </MuiThemeProvider>
    </Stack>
  </Stack>
);

export default Title;
