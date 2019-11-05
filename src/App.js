import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import "./styles.css";
import Navigation from "./Navigation";
import Header from "./header";

import Home from "./Home";
import Game from "./Game";
import Edit from "./Edit";
import { Store } from "./stores/Store";

const App = () => {
  const { state } = useContext(Store);

  return (
    <Router>
      <Header />
      <Navigation />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game/:id" component={Game} />
        <Route
          path="/edit/:id"
          render={props =>
            state.loggedIn ? (
              <Edit {...props} />
            ) : (
              <Redirect to={{ pathname: "/" }} />
            )
          }
        />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
};

const NoMatch = () => (
  <React.Fragment>
    <h2>Error 404</h2>
    <h1> Page Not Found.</h1>
  </React.Fragment>
);
export default App;
