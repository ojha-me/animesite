import "./App.css";
// import RecentEpisodes from "./components/RecentEpisodes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimeInfo from "./components/AnimeInfo";
import SearchResults from "./components/SearchResults";
import AnimeStreaming from "./components/AnimeStreaming";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TopAiring from "./components/TopAiring";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-airing" element={<TopAiring />} />
        <Route path="stream-anime/:episodeId" element={<AnimeStreaming />} />
        <Route path="/anime-info/:id" element={<AnimeInfo />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
