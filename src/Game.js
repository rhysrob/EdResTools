import React, { useState, useEffect, useContext } from "react";
import { GameStore } from "./stores/ActivityStore";
import { Store } from "./stores/Store";

import Quiz from "./activities/quiz/Quiz";
import ReactTimeago from "react-timeago";

const Game = ({ match, history }) => {
  const { games } = useContext(GameStore);
  const { state } = useContext(Store);
  const [gameData, setGameData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const game = games.games.find(x => x.id === match.params.id);

    if (state.loggedIn) {
      setGameData(game);
      setIsLoaded(true);
    } else {
      if (game.public) {
        setGameData(game);
        setIsLoaded(true);
      } else {
        history.push("/");
      }
    }
  }, []);

  return (
    <div>
      <div>
        <h1>{gameData.name}</h1>
        <p>by: {gameData.author}</p>
        <p>
          Updated: <ReactTimeago live={false} date={gameData.lastUpdate} />
        </p>
      </div>
      {isLoaded ? <Quiz data={gameData.gameData} /> : <p>Loading...</p>}
    </div>
  );
};

export default Game;
