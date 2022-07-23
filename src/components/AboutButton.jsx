import React, { useState } from "react";
import {
  Grid,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";

const AboutButton = () => {
  //Dialog state and handlers
  const [openDialog, setOpenDialog] = useState(false);
  const handleClickOpen = () => {
    setOpenDialog(true);
  };
  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Grid xs={10} md={3} item>
      <Button variant="contained" onClick={handleClickOpen}>
        <InfoIcon></InfoIcon> About
      </Button>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>About This App</DialogTitle>
        <DialogContent>
          <DialogContentText>
            This app made by Burakhan Ünver. This is an educational app to learn
            react,I don't make money from this app You can check my github.
          </DialogContentText>
          <DialogContentText>
            Note : This app uses free jokes api from
            "https://sv443.net/jokeapi/v2/". Also there is a joke limit in this
            api so if you get an error you should wait for api.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <a target="_blank" href="https://github.com/brkunver">
            <Button onClick={handleClose}>Github</Button>
          </a>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

export default AboutButton;
