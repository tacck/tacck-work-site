import React, { useEffect, useState } from 'react'

import { Helmet } from "react-helmet";

import { Box, Switch, Button, IconButton, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const GtagDialog = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const [selectedTrackAcceptance, setSelectedTrackAcceptance] = useState(true);

  const handleClickOpen = () => {
    const optInValue = localStorage.getItem('gtag_optin_key');
    const trackAcceptance = optInValue === "true" || optInValue === null;
    setSelectedTrackAcceptance(trackAcceptance);

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('gtag_optin_key', String(selectedTrackAcceptance));
    window['ga-disable-G-DM57VZVBB4'] = !selectedTrackAcceptance;
    gtag('event', 'optin', {'value': true});
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTrackAcceptance(event.target.checked);
  };

  useEffect(() => {
    const optInValue = localStorage.getItem('gtag_optin_key');
    if (optInValue === null) {
      handleClickOpen();
    }  
  },[])

  return (
    <>
      <Helmet>
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-DM57VZVBB4"></script>
        <script>{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-DM57VZVBB4');
        `}</script>
        <script>
          const optInValue = localStorage.getItem('gtag_optin_key');
          const trackIgnored = optInValue !== "true";
          window['ga-disable-G-DM57VZVBB4'] = trackIgnored;
        </script>
      </Helmet>

      <Box sx={{
        right: 0,
        bottom: 0,
        position: "absolute",
      }}>
        <IconButton size="small" color="info" onClick={handleClickOpen}>
          <SignalCellularAltIcon></SignalCellularAltIcon>
        </IconButton>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Set Google Analytics acceptance</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <FormControlLabel control={<Switch checked={selectedTrackAcceptance} onChange={handleChange} />} label="Agree to enable Google Analytics" />
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>close</Button>
          </DialogActions>
        </Dialog>
      </Box>
    </>
  );
};

export default GtagDialog;
