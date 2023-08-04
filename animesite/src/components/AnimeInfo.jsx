import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimeInfo } from "../slices/animeSlice";
import { useParams } from "react-router-dom";
import "../styles/AnimeInfo.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AnimeInfo = () => {
  const dispatch = useDispatch();
  const animeInfo = useSelector((state) => state.anime.animeInfo);
  console.log(
    "🚀 ~ file: AnimeInfo.jsx:12 ~ AnimeInfo ~ animeInfo:",
    animeInfo
  );
  const status = useSelector((state) => state.anime.status);
  const error = useSelector((state) => state.anime.error);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAnimeInfo(id));
  }, [dispatch, id]);

  const handleEpisodeClick = (episodeId) => {
    navigate(`/stream-anime/${episodeId}`);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="outer-container">
      <div className="anime-info-card">
        <div className="anime-image">
          <img src={animeInfo?.image} alt="anime image" />
        </div>
        <div className="content">
          <h1 className="title">Title: {animeInfo?.title}</h1>
          <hr></hr>
          <p>Release Date: {animeInfo?.releaseDate}</p>
          <p>Description: {animeInfo?.description}</p>
          <p>Genres: {animeInfo?.genres?.join(", ")}</p>
          <p>Sub/Dub: {animeInfo?.subOrDub}</p>
          <p>Type: {animeInfo?.type}</p>
          <p>Status: {animeInfo?.status}</p>
          <p>Other Names: {animeInfo?.otherName}</p>
          <p>Total Episodes: {animeInfo?.totalEpisodes}</p>
        </div>
      </div>
      <div className="episodes-container">
        <h1>Episodes</h1>

        <div className="episodes-wrapper">
          <div className="episodes">
            {animeInfo?.episodes?.map((episode) => (
              <div key={episode?.id}>
                <Button
                  onClick={() => handleEpisodeClick(episode?.id)}
                  colorScheme="teal"
                  w={90}
                >
                  Episode {episode.number}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimeInfo;
