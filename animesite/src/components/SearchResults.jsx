/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimeList } from "../slices/animeSlice";
import AnimeCard from "./AnimeCard";
const SearchResults = () => {
  const dispatch = useDispatch();
  const animeList = useSelector((state) => state.anime.animeList);
  const displayingAnimes = animeList.results;

  const { query } = useParams();
  console.log(animeList);

  useEffect(() => {
    dispatch(fetchAnimeList({ query }));
  }, [dispatch, query]);
  return (
    <>
      {" "}
      <div>SearchResults</div>
      {displayingAnimes?.map((displayingAnimes) => (
        <AnimeCard
          key={displayingAnimes?.id}
          id={displayingAnimes?.id}
          title={displayingAnimes?.title}
          image={displayingAnimes?.image}
          genres={displayingAnimes?.genres || []}
        />
      ))}
    </>
  );
};

export default SearchResults;
