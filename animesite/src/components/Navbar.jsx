import "../styles/Navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <Link to={"/"}>
            <h1>AddFree Anime</h1>
          </Link>
        </div>
        <div className="nav-items">
          <Link to={"/"}>
            <h2>Home</h2>
          </Link>
          <Link to={"/top-airing"}>
            <h2>Top Airing</h2>
          </Link>
          <Link to={"/recent-episodes"}>
            <h2>Most Recents</h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
