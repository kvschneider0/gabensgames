import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div className="navbar">
        <NavLink to="/games">Games</NavLink>
        <NavLink to="/developers">Developers</NavLink>
        <NavLink to="/saved">My Saved Games</NavLink>
        <input className="input" type="text" placeholder="Search..."></input>
      </div>
    </header>
  );
}

export default NavBar;
