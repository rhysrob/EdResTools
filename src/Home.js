import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { GameStore } from "./stores/ActivityStore";
import { Store } from "./stores/Store";
import uuid from "uuid";
import ReactTimeago from "react-timeago";

const Home = ({ history }) => {
  const { games, dispatch } = useContext(GameStore);
  const { state } = useContext(Store);
  const [myGames, setMyGames] = useState();
  useEffect(() => {
    if (!state.loggedIn) {
      setMyGames(games.games.filter(item => item.public));
    } else {
      setMyGames(games.games);
    }
  }, [games, state.loggedIn]);

  const handleRemoveGame = id => {
    const confirm = window.confirm(
      "Are you sure you want to remove this game? "
    );
    return confirm
      ? dispatch({
          type: "REMOVE_GAME",
          payload: id
        })
      : null;
  };

  const handleAddGame = () => {
    const newGame = {
      lastUpdate: Date.now(),
      id: uuid(),
      name: "untitled  game",
      public: false,
      author: state.name
    };
    dispatch({
      type: "ADD_GAME",
      payload: newGame
    });
    history.push(`/edit/${newGame.id}`);
  };

  return (
    <div>
      <div className='gameWrapper'>
        {myGames &&
          myGames.map(game => (
            <div className='gameRow' key={game.id}>
              <div>
                <p><strong>{game.name}</strong></p>
                <p>{game.type}</p>
              </div>
              <div>
                <button>
                  <Link to={`/game/${game.id}`}>Play</Link>
                </button>
                {state.loggedIn && (
                  <button>
                    <Link to={`/edit/${game.id}`}>Edit</Link>
                  </button>
                )}
                {state.loggedIn && (
                  <button onClick={() => handleRemoveGame(game.id)}>
                    Remove
                  </button>
                )}
              </div>
              <div>
                <p>
                  Updated <ReactTimeago live={false} date={game.lastUpdate} />
                </p>
                <p> by {game.author}</p>
              </div>
            </div>
          ))}
      </div>
      {state.loggedIn && <button onClick={handleAddGame}>Add Game</button>}

      {!state.loggedIn && (
        <p>Only public games are shown, for a full list please login.</p>
      )}
    </div>
  );
};

export default Home;
