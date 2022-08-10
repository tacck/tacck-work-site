import * as React from "react";

// import { useConfig } from "gatsby-theme-advanced";

import { Grid, Box, Typography, Link } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import Layout from "../layouts";

type Props = {
  location: {
    pathname: string;
  }
}

const WorksPage = ({location}: Props): JSX.Element => {
  // const config = useConfig();

  return (
    <Layout pageTitle="Works" pathName={location.pathname}>
      <Typography variant="h2">Works</Typography>
      <Grid container>
        <Grid item xs={8} >
          <Box sx={{ mt: 2 }}>
            <Typography variant="h4">Jobs</Typography>
            <Typography variant="body1">Software Engineer</Typography>
            <ul>
              <li><Typography variant="body1">Web system design</Typography></li>
              <li><Typography variant="body1">Web Backend: PHP, Java, Node.js</Typography></li>
              <li><Typography variant="body1">Web Frontend: React/Next.js, Vue.js</Typography></li>
              <li><Typography variant="body1">AWS Amplify</Typography></li>
            </ul>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h4">Tech Documents</Typography>
            <ul>
              <li><Typography variant="body1"><Link target="_blank" rel="noopener" underline="hover" href="https://speakerdeck.com/tacck">Speaker Deck <OpenInNewIcon sx={{ verticalAlign: 'middle', fontSize: '1rem' }} /></Link></Typography></li>
              <li><Typography variant="body1"><Link target="_blank" rel="noopener" underline="hover" href="https://dev.to/tacck">Dev.to <OpenInNewIcon sx={{ verticalAlign: 'middle', fontSize: '1rem' }} /></Link></Typography></li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default WorksPage;
