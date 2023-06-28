import "../styles/Navbar.css";

const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <h1>AddFree Anime</h1>
        </div>
        <div className="nav-items">
          <h2>Home</h2>
          <h2>Top Airing</h2>
          <h2>Most Recents</h2>
        </div>
      </div>
    </>
  );
};

export default NavBar;
