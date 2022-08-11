import React from "react";

import { navigate } from 'gatsby';

import { Button, Stack, Box } from "@mui/material";

import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// import { useConfig } from "gatsby-theme-advanced";

// import BaseLink from "../Link";

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

type Props = {
  pathName: string;
  href: string;
  label: string;
}

const NavButton = ({ pathName, href, label }: Props): JSX.Element => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));
  const handlerClick = (event) => {
    // console.log(event)
    navigate(event.target.value);
  }

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

  const regularPathName = pathName.length > 1 ? pathName.substring(0, pathName.length - 1) : pathName;
  return <Button variant="text" sx={regularPathName === href ? selectedSx : unSelectedSx} value={href} onClick={handlerClick}>{label}</Button>;
}

type Params = {
  pathName: string
}

const NavTab = ({pathName}: Params): JSX.Element => {
  const tabItems = () => links.map((item) => <NavButton key={item.label} pathName={pathName} href={item.href} label={item.label} />);

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
