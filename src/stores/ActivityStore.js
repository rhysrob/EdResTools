import React, { useReducer } from "react";

export const GameStore = React.createContext();

const initalState = {
  games: [
    {
      lastUpdate: "Sept 15 2019",
      id: "001",
      name: "Game one",
      public: false,
      author: "Jim",
      type: "Quiz",
      gameData: [
        {
          question: "What's the capital of Wales",
          choices: [
            {
              choice: "Cardiff",
              isCorrect: true,
              isSelected: false,
              userSelect: false
            },
            {
              choice: "Caernarfon",
              isCorrect: false,
              isSelected: false,
              userSelect: false
            },
            {
              choice: "Y Fron",
              isCorrect: false,
              isSelected: false,
              userSelect: false
            }
          ]
        },
        {
          question: "What's the capital of United States",
          choices: [
            {
              choice: "New York",
              isCorrect: false,
              isSelected: false,
              userSelect: false
            },
            {
              choice: "Washington",
              isCorrect: true,
              isSelected: false,
              userSelect: false
            },
            {
              choice: "Chicago",
              isCorrect: false,
              isSelected: false,
              userSelect: false
            }
          ]
        },

      ]
    },
    {
      lastUpdate: 1572878471600,
      id: "002",
      name: "Game two",
      public: true,
      author: "Jim"
    },
    {
      lastUpdate: "Oct 21 2019",
      id: "003",
      name: "Game three",
      public: false,
      author: "Jim"
    },
    {
      lastUpdate: "March 1 2019",
      id: "004",
      name: "Game four",
      public: true,
      author: "Jim"
    },
    {
      lastUpdate: "Oct 22  2019",
      id: "005",
      name: "Game five",
      public: false,
      author: "Jim"
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_GAME":
      console.log(action.payload);
      return { ...state, games: [...state.games, action.payload] };
    case "EDIT_GAME":
      const arr = [...state.games];
      arr[state.games.map(item => item.id).indexOf(action.payload.id)] =
        action.payload;
      return { ...state, games: arr };
    case "REMOVE_GAME":
      const idx = state.games.map(item => item.id).indexOf(action.payload);
      return { ...state, ...state.games.splice(idx, 1) };
    default:
      return state;
  }
}

export function GameStoreProvider(props) {
  const [games, dispatch] = useReducer(reducer, initalState);
  const value = { games, dispatch };
  return (
    <GameStore.Provider value={value}>{props.children}</GameStore.Provider>
  );
}
