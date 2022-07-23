import React, { useContext, useState } from "react";
import { Grid, Button } from "@mui/material";
import Context from "../Context";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const ChangeThemeButton = () => {
  let ctx = useContext(Context);
  document.body.style = "background :" + ctx.state.theme.bgColor + ";";
  const changeThemeHandler = () => {
    ctx.dispatch({ type: "switchTheme" });
  };
  return (
    <Grid xs={10} md={4} item>
      <Button onClick={changeThemeHandler} variant="contained">
        <DarkModeIcon></DarkModeIcon>
        Change Theme
      </Button>
    </Grid>
  );
};

export default ChangeThemeButton;
