import GameItem from "./GameItem";

function Games({ games, handleSave }) {
  const gameList = games.map((gameObj) => (
    <GameItem key={gameObj.id} game={gameObj} handleSave={handleSave} />
  ));

  return (
    <div id="game-list">
      <ul className="game-list">{gameList}</ul>
    </div>
  );
}

export default Games;
