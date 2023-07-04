import "./App.css";
// import RecentEpisodes from "./components/RecentEpisodes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimeInfo from "./components/AnimeInfo";
import SearchResults from "./components/SearchResults";
import AnimeStreaming from "./components/AnimeStreaming";
import Home from "./components/Home";
import TopAiring from "./components/TopAiring";
import RecentEpisodes from "./components/RecentEpisodes";
import NavBar from "./components/Navbar";
// import ErrorPage from "./ErrorPage";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-airing" element={<TopAiring />} />
        <Route path="/recent-episodes" element={<RecentEpisodes />} />
        <Route path="stream-anime/:episodeId" element={<AnimeStreaming />} />
        <Route path="/anime-info/:id" element={<AnimeInfo />} />
        <Route path="/search/:query" element={<SearchResults />} />
        {/* <Route path="/*" element={<ErrorPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
