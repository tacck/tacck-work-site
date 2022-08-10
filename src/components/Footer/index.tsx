import React from "react";

import { Typography, Stack, Link } from "@mui/material";
import { grey } from '@mui/material/colors';

// import { useConfig } from "gatsby-theme-advanced";

// import BaseLink from "../Link";

// import UserLinks from "../UserLinks";

const Footer = (): JSX.Element => {
  // const config = useConfig();

  return (
    <Stack
      component="footer"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        padding: 0,
        color: grey[100],
        bgcolor: "primary.dark",
      }}
    >
      {/* <UserLinks includeRss /> */}

      <Stack justifyContent="center" alignItems="center">
        <Typography variant="caption">
        Tacck Work © Copyright 2022
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
