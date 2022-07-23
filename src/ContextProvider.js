import React, { useReducer } from "react";
import Context from "./Context";
//default state
let InitialState = {
  //theme colors
  theme: {
    bgColor: "#DCD7C9",
    color2: "#A27B5C",
    color3: "#3F4E4F",
    color4: "#2C3639",
  },
  //dark mode check
  isDark: false,
  //joke
  joke: {
    setup: "Loading New joke",
    delivery: "",
  },
  //loading state check
  isJokeLoaded: false,
};

let reducer = (state, action) => {
  switch (action.type) {
    case "switchTheme":
      //assign state to temporary variable
      let temp = { ...state };
      //if it isn't dark, change to dark theme
      if (!temp.isDark) {
        temp.isDark = true;
        temp.theme.bgColor = "#2C3639";
        temp.theme.color2  = "#3F4E4F";
        temp.theme.color3  = "#A27B5C";
        temp.theme.color4  = "#DCD7C9";
      } else {
        //if theme is already dark, change to light theme
        temp.isDark = false;
        temp.theme.bgColor = "#DCD7C9";
        temp.theme.color2  = "#A27B5C";
        temp.theme.color3  = "#3F4E4F";
        temp.theme.color4  = "#2C3639";
      }
      return temp;

    case "setJoke":
      //get state with object destruction, change joke and loading state
      return { ...state, joke: action.joke, isJokeLoaded: action.isJokeLoaded };
    default:
      break;
  }
};
// context provider with useReducer
const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  return (
    <Context.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;
