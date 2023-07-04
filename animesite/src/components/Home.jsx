import Hero from "./Hero";
import HomeTopAiringSlider from "./HomeTopAiringSlider";
import HomeRecentEpisodes from "./HomeRececntEpisodes";
import Footer from "./Footer";
import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="home-content">
        <div className="top-airing">
          <HomeTopAiringSlider />
        </div>
        <div className="recent-episodes">
          <HomeRecentEpisodes />
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
