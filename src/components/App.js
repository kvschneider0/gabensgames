import "../App.css";
import NavBar from "./NavBar";
import Games from "./Games";
// import GameItem from "./GameItem";

import Developers from "./Developers";
// import img from "./name.png";
import SavedGames from "./SavedGames";
import { Switch, Route, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [games, setGames] = useState([]);
  const [savedGames, setSavedGames] = useState([]);
  const [devs, setDevs] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const history = useHistory();
  history.push("/games");

  //////// Data Fetching ///////
  useEffect(() => {
    fetch(`https://api.rawg.io/api/games?key=${API_KEY}`)
      .then((r) => r.json())
      .then((data) => setGames(data.results));

    fetch(`https://api.rawg.io/api/developers?key=${API_KEY}`)
      .then((r) => r.json())
      .then((data) => setDevs(data.results));

    fetch("http://localhost:3000/games")
      .then((r) => r.json())
      .then((data) => setSavedGames(data));
  }, []);

  //////// Search Bar ////////
  function handleSearchChange(e) {
    setSearchInput(e.target.value);
  }
  //////// Search Bar Filtered Lists ////////
  const filteredGameList = games.filter((game) => {
    return game.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  const filteredDevList = devs.filter((dev) => {
    return dev.name.toLowerCase().includes(searchInput.toLowerCase());
  });

  function handleSave(gameData) {
    // return (games = { gameData });
    setSavedGames((currentState) => [...currentState, gameData]);
    // console.log(savedGames);
  }

  const handleAddGame = (formData) => {
    setSavedGames((savedGames) => [...savedGames, formData]);
  };

  // function handleNewSave(newGameData) {
  //   setGames((currentState) => [...currentState, newGameData]);
  // }

  // function onSubmit(newGameData) {
  //   handleNewSave(newGameData);
  // }

  return (
    <div>
      {/* <header>
        <img className="headerImg" src={img} alt="nameImg"></img>
      </header> */}
      <NavBar
        handleSearchChange={handleSearchChange}
        searchInput={searchInput}
      />
      <Switch>
        <Route path="/games">
          <Games games={filteredGameList} handleSave={handleSave} />
        </Route>
        <Route path="/developers">
          <Developers devs={filteredDevList} />
        </Route>
        <Route path="/saved">
          <SavedGames handleAddGame={handleAddGame} games={games} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
