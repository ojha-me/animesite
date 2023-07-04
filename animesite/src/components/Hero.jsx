import "../styles/Hero.css";
import SearchAnime from "./SearchAnime";
const Hero = () => {
  return (
    <div className="hero-section">
      <div className="content">
        <h2>Welcome to AddFree Anime</h2>
        <h1>Watch Unlimited Anime Content and More..</h1>
        <SearchAnime />
      </div>
    </div>
  );
};

export default Hero;
