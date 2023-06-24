import SearchAnime from "./SearchAnime";
import "../styles/Navbar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <h1 className="navbar-name">AddFree Anime</h1>
        </div>
        <SearchAnime />
      </div>
    </>
  );
};

export default NavBar;
