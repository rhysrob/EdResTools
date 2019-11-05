import React, { useContext } from "react";
import { Store } from "./stores/Store";

const LoginBtn = () => {
  const { state, dispatch } = useContext(Store);

  const handleLogIn = () => {
    return dispatch({
      type: "TOGGLE_LOGIN",
      payload: state.loggedIn
    });
  };
  return (
    <React.Fragment>
      <button onClick={handleLogIn}>
        {state.language === "en"
          ? state.loggedIn
            ? `Sign Out`
            : `Sign In`
          : state.loggedIn
          ? `Allgofnodi`
          : `Mewngofnodi`}
      </button>
    </React.Fragment>
  );
};

export default LoginBtn;
