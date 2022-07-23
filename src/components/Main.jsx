import React, { useContext } from "react";
import { Grid, Paper, Box } from "@mui/material";
import Context from "../Context";
import NewJokeButton from "./NewJokeButton";
import ChangeThemeButton from "./ChangeThemeButton";
import AboutButton from "./AboutButton";
const Main = () => {
  let ctx = useContext(Context);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={9} md={6}>
        <Box>
          <Paper
            style={{
              backgroundColor: ctx.state.theme.color4,
              paddingBottom: "2rem",
            }}
            elevation={3}
          >
            <Grid
              container
              justifyContent="center"
              style={{ textAlign: "center" }}
            >
              <Grid item xs={12}>
                <h1 style={{ color: ctx.state.theme.bgColor }}>
                  Welcome to the Jokes App!
                </h1>
              </Grid>
              <Grid container justifyContent="center" spacing={2}>
                <NewJokeButton></NewJokeButton>
                <ChangeThemeButton></ChangeThemeButton>
                <AboutButton></AboutButton>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Main;
