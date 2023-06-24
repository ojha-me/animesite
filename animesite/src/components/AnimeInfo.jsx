import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAnimeInfo } from "../slices/animeSlice";
import { useParams } from "react-router-dom";
import "../styles/AnimeInfo.css";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const AnimeInfo = () => {
  const dispatch = useDispatch();
  const animeInfo = useSelector((state) => state.anime.animeInfo);
  const status = useSelector((state) => state.anime.status);
  const error = useSelector((state) => state.anime.error);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(fetchAnimeInfo(id));
  }, [dispatch, id]);
  const handleEpisodeClick = (episodeId) => {
    // console.log(episodeId);
    navigate(`/stream-anime/${episodeId}`);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="anime-info-card">
      <h1>Title: {animeInfo?.title}</h1>
      <p>Release Date: {animeInfo?.releaseDate}</p>
      <p>Description: {animeInfo?.description}</p>
      <p>Genres: {animeInfo?.genres?.join(", ")}</p>
      <p>Sub/Dub: {animeInfo?.subOrDub}</p>
      <p>Type: {animeInfo?.type}</p>
      <p>Status: {animeInfo?.status}</p>
      <p>Other Names: {animeInfo?.otherName}</p>
      <p>Total Episodes: {animeInfo?.totalEpisodes}</p>
      <h2>Episodes:</h2>

      {animeInfo?.episodes?.map((episode) => (
        <div key={episode?.id}>
          <p>Episode Number: {episode?.number}</p>
          <Button
            onClick={() => handleEpisodeClick(episode?.id)}
            colorScheme="teal"
          >
            Watch Episode
          </Button>
        </div>
      ))}
    </div>
  );
};

export default AnimeInfo;
