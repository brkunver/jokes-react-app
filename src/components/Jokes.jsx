import React, { useContext, useEffect } from "react";
import { Grid, Paper, Box, CircularProgress } from "@mui/material";
import Context from "../Context";
import "../styles/jokes.css";
const Jokes = () => {
  let ctx = useContext(Context);
  //Once app loaded get a joke
  useEffect(() => {
    fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=racist,sexist&type=twopart"
    )
      .then((response) => response.json())
      .then((response) =>
        ctx.dispatch({ type: "setJoke", joke: response, isJokeLoaded: true })
      )
      .catch((err) =>
        ctx.dispatch({
          type: "setJoke",
          joke: { setup: "An error occured, try again later :(" },
          isJokeLoaded: true,
        })
      );
  }, []);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={9} md={6}>
        <Box>
          <Paper
            elevation={3}
            className="jokes-paper"
            style={{ background: ctx.state.theme.color4 }}
          >
            {!ctx.state.isJokeLoaded && <CircularProgress></CircularProgress>}
            <p style={{ color: ctx.state.theme.bgColor }}>
              {ctx.state.joke.setup}
            </p>
            <p style={{ color: ctx.state.theme.bgColor }}>
              {ctx.state.joke.delivery}
            </p>
          </Paper>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Jokes;
