import React, { useContext } from "react";
import LangContext from "./LangContext";

const Dash = () => {
  const { language } = useContext(LangContext);

  return (
    <div>
      {language === "en" ? (
        <h1> My ativities </h1>
      ) : (
        <h1>Fy ngweithgareddau</h1>
      )}
    </div>
  );
};

export default Dash;
