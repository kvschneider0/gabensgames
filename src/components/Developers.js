import DeveloperItem from "./DeveloperItem";

function Developers({ devs }) {
  const devList = devs.map((devObj) => {
    return <DeveloperItem 
             key={devObj.id}
             dev={devObj}
           />;
  });

  return (
    <div id="dev-list">
      <ul className="game-list">{devList}</ul>
    </div>
  );
}

export default Developers;
