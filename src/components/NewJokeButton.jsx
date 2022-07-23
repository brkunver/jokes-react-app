import React, { useContext } from "react";
import { Grid, Button } from "@mui/material";
import Context from "../Context";
import AddReactionIcon from "@mui/icons-material/AddReaction";
const NewJokeButton = () => {
  let ctx = useContext(Context);
  //get new joke when button is clicked
  let onNewJokeHandler = () => {
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
  };
  return (
    <Grid xs={10} md={4} item>
      <Button onClick={onNewJokeHandler} variant="contained">
        <AddReactionIcon></AddReactionIcon>
        Get Another
        </Button>
    </Grid>
  );
};

export default NewJokeButton;
