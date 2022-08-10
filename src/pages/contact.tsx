import * as React from "react";

// import { useConfig } from "gatsby-theme-advanced";

import { Box, Typography, Link } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Layout from "../layouts";

type Props = {
  location: {
    pathname: string;
  }
}

const ContactPage = ({location}: Props): JSX.Element => {
  // const config = useConfig();

  return (
    <Layout pageTitle="Contact" pathName={location.pathname}>
      <div>
        <Typography variant="h2">Contact</Typography>
        <Box sx={{ mt: 2 }}>
          <Typography><Link target="_blank" rel="noopener" underline="hover" href="https://twitter.com/tacck"><TwitterIcon sx={{ verticalAlign: 'middle', fontSize: '1rem' }} /> Twitter</Link></Typography>
          <Typography><Link target="_blank" rel="noopener" underline="hover" href="https://www.facebook.com/tacck"><FacebookIcon sx={{ verticalAlign: 'middle', fontSize: '1rem' }} /> Facebook</Link></Typography>
          <Typography><Link target="_blank" rel="noopener" underline="hover" href="https://www.linkedin.com/in/tacck/"><LinkedInIcon sx={{ verticalAlign: 'middle', fontSize: '1rem' }} /> LinkedIn</Link></Typography>
        </Box>
      </div>
    </Layout>
  );
};

export default ContactPage;
