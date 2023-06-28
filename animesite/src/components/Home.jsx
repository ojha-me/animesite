import Hero from "./Hero";
import TopAiring from "./TopAiring";
import RecentEpisodes from "./RecentEpisodes";

import "../styles/Home.css";

const Home = () => {
  return (
    <>
      <Hero />

      <div className="home-content">
        <div className="top-airing">
          <TopAiring />
        </div>
        <div className="recent-episodes">
          <RecentEpisodes />
        </div>
      </div>
    </>
  );
};

export default Home;
