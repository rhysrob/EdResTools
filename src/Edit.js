import React, { useContext, useState, useEffect } from "react";
import { GameStore } from "./stores/ActivityStore";
import { Store } from "./stores/Store";

const Edit = ({ match, history }) => {
  const { games, dispatch } = useContext(GameStore);
  const { state } = useContext(Store);
  const [gameData, setGameData] = useState({});

  const [nameInput, setNameInput] = useState("");
  const [isPublicInput, setIsPublicInput] = useState(false);
  useEffect(() => {
    const game = games.games.find(x => x.id === match.params.id);

    if (state.loggedIn || game.public) {
      setGameData(game);
      setNameInput(gameData.name);
      setIsPublicInput(gameData.public);
    } else {
      history.push("/");
    }
  }, [state, gameData]);

  const handleSave = event => {
    const newGame = {
      lastUpdate: Date.now(),
      id: gameData.id,
      name: nameInput,
      public: isPublicInput,
      author: state.name
    };
    dispatch({
      type: "EDIT_GAME",
      payload: newGame
    });
    history.push("/");
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSave}>
      <div>
        <h1>Game Details</h1>
        <p>
          Name:{" "}
          <input
            type="text"
            value={nameInput || ""}
            onChange={e => setNameInput(e.target.value)}
            name="setNameInput"
          />
        </p>
        <p>
          Public:{" "}
          <input
            type="checkbox"
            checked={isPublicInput || false}
            onChange={e => setIsPublicInput(e.target.checked)}
          />
        </p>
      </div>
      <input type="submit" value="Save" />
    </form>
  );
};

export default Edit;
