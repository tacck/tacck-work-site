import React from "react";

import { Button, Stack, Box } from "@mui/material";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// import { useConfig } from "gatsby-theme-advanced";

import BaseLink from "../Link";

const links = [
  {
    label: 'About',
    href: '/'
  },{
    label: 'Works',
    href: '/works'
  },{
    label: 'Contact',
    href: '/contact'
  },
]

const NavButton = ({ pathName, href, label }): JSX.Element => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const baseSx = {
    width: matches ? "140px" : "100px",
    height: "100%",
    backgroundColor: "secondary.main",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "secondary.light",
    }
  }
  
  const selectedSx = {
    ...baseSx,
    fontSize: "1.2rem",
    borderBottomColor: "primary.main",
    borderBottomStyle: "solid",
    borderBottomWidth: "2px",
    
  }
  const unSelectedSx = {
    ...baseSx,
  }

  return <Button variant="text"  href={href} sx={pathName === href ? selectedSx : unSelectedSx} >{label}</Button>
}

type Params = {
  pathName: string
}

const NavTab = ({pathName}: Params): JSX.Element => {
  const tabItems = () => links.map((item) => <NavButton pathName={pathName} href={item.href} label={item.label} />);

  return (
    <Stack direction="row" sx={{
      backgroundColor: "primary.main",
      display: "grid"
    }}>
      <Box
        width={{
          xs: "100%",
          sm: 500,
          md: 800,
        }}
        justifySelf="center"
      >
        {tabItems()}
      </Box>
    </Stack>
  );
};

export default NavTab;
