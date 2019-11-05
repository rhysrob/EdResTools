import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { StoreProvider } from "./stores/Store";
import { GameStoreProvider } from "./stores/ActivityStore";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StoreProvider>
    <GameStoreProvider>
      <App />
    </GameStoreProvider>
  </StoreProvider>,
  rootElement
);
