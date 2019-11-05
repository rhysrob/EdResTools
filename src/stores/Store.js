import React, { useReducer } from "react";

export const Store = React.createContext();

const initalState = {
  language: "en",
  loggedIn: localStorage.getItem("login") || false,
  name: "Jim"
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_LANG":
      return { ...state, language: action.payload };
    case "TOGGLE_LOGIN":
      localStorage.setItem("login", !state.loggedIn);
      return { ...state, loggedIn: !state.loggedIn };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initalState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
