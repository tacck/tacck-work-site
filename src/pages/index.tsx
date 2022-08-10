import * as React from "react";

// import { useConfig } from "gatsby-theme-advanced";

import { styled } from '@mui/material/styles';
import { Grid, Box, Typography, Avatar, Link } from "@mui/material";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

import Layout from "../layouts";

import MeImage from "../images/me_2019_902x902.jpg";
import CbImage from "../images/Community_Builder_badge_1600px.png";

const SideImage = styled('div')(
  ({theme}) => ({
    width: '200px',
    height: '200px',
    [theme.breakpoints.down('md')]: {
      width: '150px',
      height: '150px',
    },
    [theme.breakpoints.down('sm')]: {
      width: '100px',
      height: '100px',
    }
  })
);

type Props = {
  location: {
    pathname: string;
  }
}

const AboutPage = ({location}: Props): JSX.Element => {
  // const config = useConfig();

  return (
    <Layout pageTitle="About"  pathName={location.pathname}>
      <Typography variant="h2">About</Typography>
      <Grid container>
        <Grid item xs={8} >
          <Box sx={{ mt: 2 }}>
            <Typography variant="h4">Who</Typography>
            <Typography variant="body1">tacck / Kihara, Takuya</Typography>
            <Typography variant="body1">Sapporo, Hokkaido, Japan</Typography>
          </Box>
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
            <Typography variant="h4">Communities</Typography>
            <ul>
              <li><Typography variant="body1"><Link target="_blank" rel="noopener" underline="hover" href="https://mild-web-sap.connpass.com/">Yuru-Web Sapporo <OpenInNewIcon sx={{ verticalAlign: 'middle', fontSize: '1rem' }} /></Link></Typography></li>
              <li><Typography variant="body1"><Link target="_blank" rel="noopener" underline="hover" href="https://aws-amplify-jp.github.io/">Amplify Japan User Group <OpenInNewIcon sx={{ verticalAlign: 'middle', fontSize: '1rem' }} /></Link></Typography></li>
              <li><Typography variant="body1"><Link target="_blank" rel="noopener" underline="hover" href="https://aws.amazon.com/developer/community/community-builders/">AWS Community Builder <OpenInNewIcon sx={{ verticalAlign: 'middle', fontSize: '1rem' }} /></Link></Typography>
                <Typography variant="body2"><Link target="_blank" rel="noopener" underline="hover" href="https://aws.amazon.com/developer/community/community-builders/community-builders-directory/?cb-cards.sort-by=item.additionalFields.cbName&cb-cards.sort-order=asc&awsf.builder-category=*all&awsf.location=*all&awsf.year=*all&cb-cards.q=kihara%2Btakuya&cb-cards.q_operator=AND">Q2 2021,2022 (Front-end Web and Mobile) <OpenInNewIcon sx={{ verticalAlign: 'middle', fontSize: '1rem' }} /></Link></Typography></li>
            </ul>
          </Box>
        </Grid>
        <Grid item xs={4} sx={{ display: 'grid', gap: 4, justifyItems: 'right' }}>
          <SideImage>
            <Avatar alt="tacck" src={MeImage} sx={{ width: '100%', height: '100%' }} />
          </SideImage>
          <SideImage>
            <Avatar alt="tacck" src={CbImage} variant="square" sx={{ width: '100%', height: '100%' }} />
          </SideImage>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default AboutPage;
