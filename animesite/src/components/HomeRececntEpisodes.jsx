import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AnimeCard from "./AnimeCard";
import { fetchRecentEpisodesList } from "../slices/animeSlice";
import "../styles/HomeRecentEpisodes.css";

const HomeRececntEpisodes = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const recentEpisodes = useSelector((state) => state.anime.recentEpisodes);
  const displayingAnimes = recentEpisodes.results;
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalCards = 18;

  useEffect(() => {
    dispatch(fetchRecentEpisodesList());
  }, [dispatch]);
  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleMoreButton = () => {
    Navigate("/recent-episodes");
  };
  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards);
  const currentCards = displayingAnimes?.slice(0, totalCards);

  return (
    <>
      <div className="outer-container">
        <h1>RECENT EPISODES</h1>
        <div className="container">
          {currentCards?.slice(startIndex, endIndex).map((anime) => (
            <AnimeCard
              key={anime?.id}
              id={anime?.id}
              title={anime?.title}
              image={anime?.image}
              genres={anime?.genres || []}
            />
          ))}
          {endIndex >= totalCards && endIndex < displayingAnimes.length && (
            <div className="recentEp-more-button-container">
              <button
                className="recentEp-more-button"
                onClick={handleMoreButton}
              >
                More
              </button>
            </div>
          )}

          <div className="pagination">
            <div
              className="recentEp-arrow-left"
              onClick={handlePreviousPage}
            ></div>
            <div
              className="recentEp-arrow-right"
              onClick={handleNextPage}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeRececntEpisodes;
