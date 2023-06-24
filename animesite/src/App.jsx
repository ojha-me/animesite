import TopAiring from "./components/TopAiring";
import "./App.css";
// import RecentEpisodes from "./components/RecentEpisodes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnimeInfo from "./components/AnimeInfo";
import SearchResults from "./components/SearchResults";
import AnimeStreaming from "./components/AnimeStreaming";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<TopAiring />} />
        <Route path="stream-anime/:episodeId" element={<AnimeStreaming />} />
        <Route path="/anime-info/:id" element={<AnimeInfo />} />
        <Route path="/search/:query" element={<SearchResults />} />
      </Routes>
    </Router>
  );
}

export default App;
