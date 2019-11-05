import React, { useContext } from "react";
import { Store } from "./stores/Store";

const LanguageBtn = () => {
  const { state, dispatch } = useContext(Store);
  const switchLang = () => {
    return dispatch({
      type: "CHANGE_LANG",
      payload: state.language === "cy" ? "en" : "cy"
    });
  };
  return (
    <button onClick={switchLang}>
      {state.language === "en" ? `Cymraeg` : `English`}
    </button>
  );
};

export default LanguageBtn;
