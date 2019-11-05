import React, { useContext } from "react";
import LanguageBtn from "./LanguageBtn";
import LoginBtn from "./loginBtn";
import { Store } from "./stores/Store";

const Header = () => (
  <div style={styles.header}>
    <Greeting />
    <LanguageBtn />
    <LoginBtn />
  </div>
);

const Greeting = () => {
  const { state } = useContext(Store);

  return (
    <React.Fragment>
      {state.loggedIn ? (
        <h2>
          {state.language === "en" ? `Welcome ` : `Croeso `} {state.name}
        </h2>
      ) : (
        <h2>
          {state.language === "en" ? `Welcome Guest` : `Croeso defnyddiwr`}
        </h2>
      )}
    </React.Fragment>
  );
};

const styles = {
  header: {
    height: "80px",
    borderBottom: "solid 3px #4ac",
    display: "grid",
    gridTemplateColumns: "auto 120px 120px",
    gridGap: "30px",
    alignItems: "center"
  }
};

export default Header;
