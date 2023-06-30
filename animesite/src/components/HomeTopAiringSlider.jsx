import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AnimeCard from "./AnimeCard";
import { fetchTopAiringList } from "../slices/animeSlice";
import "../styles/HomeTopAiringSlider.css";
import { useNavigate } from "react-router-dom";

const HomeTopAiringSlider = () => {
  const dispatch = useDispatch();
  const animeList = useSelector((state) => state.anime.topAiring);
  const displayingAnimes = animeList.results;
  const Navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 3;
  const totalCards = 9;

  useEffect(() => {
    dispatch(fetchTopAiringList());
  }, [dispatch]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const handleMoreButton = () => {
    Navigate("/top-airing");
  };

  const totalPages = Math.ceil(totalCards / cardsPerPage);
  const startIndex = currentPage * cardsPerPage;
  const endIndex = Math.min(startIndex + cardsPerPage, totalCards);
  const currentCards = displayingAnimes?.slice(0, totalCards);

  return (
    <>
      <div className="outer-container">
        <h1>TOP AIRING</h1>
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
          {endIndex >= totalCards && (
            <div className="more-button-container">
              <button className="more-button" onClick={handleMoreButton}>
                More
              </button>
            </div>
          )}
          <div className="pagination">
            <div className="arrow-left" onClick={handlePreviousPage}></div>
            <div className="arrow-right" onClick={handleNextPage}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeTopAiringSlider;
