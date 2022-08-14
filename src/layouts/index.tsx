import * as React from "react";

import { Box } from "@mui/material";
import { Helmet } from "react-helmet";

// import { SEO } from "gatsby-theme-advanced";

import Title from "../components/Title";
import Footer from "../components/Footer";
import NavTab from "../components/NavTab";
import GtagDialog from "../components/GtagDialog";

import ThemeProvider from "../theme";


type MainLayoutProps = {
  pageTitle: string;
  pathName: string;
  children?: React.ReactNode;
};

const MainLayout = ({ pageTitle, pathName, children }: MainLayoutProps): JSX.Element => (
  <ThemeProvider>
    {/* <SEO /> */}
    <Helmet title={`${pageTitle} | Tacck Work`} />
    <GtagDialog></GtagDialog>

    <Box
      sx={{
        minHeight: "100vh",
        minWidth: "100%",
        pt: 12,
        padding: 0,

        display: "grid",
        gridTemplateColumns: "100%",
        gridTemplateRows: {
          xs: "240px 50px 1fr 40px",
          md: "280px 50px 1fr 40px",
          lg: "320px 50px 1fr 40px",
        },
        gap: 0,
        bgcolor: "secondary.main",
      }}
    >
      <Title />
      
      <NavTab pathName={pathName} />
      <Box
        width={{
          xs: "85%",
          sm: 500,
          md: 800,
        }}
        justifySelf="center"
        sx= {{
          mt: 4,
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  </ThemeProvider>
);

export default MainLayout;
