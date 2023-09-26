import Home from "./components/Home";
import "./App.css";
import { useState } from "react";
import GamePlay from "./components/GamePlay";

const App = () => {
  const [startGame, setStartGame] = useState(false);
  const toggleGame = () => {
    setStartGame((x) => !x);
  };
  return <div>{startGame ? <GamePlay /> : <Home toggle={toggleGame} />}</div>;
};

export default App;
