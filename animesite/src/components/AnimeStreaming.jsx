import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchEpisodeStreamById } from "../slices/animeSlice";
import { Button } from "@chakra-ui/react";
import VideoPlayer from "./VideoPlayer";

const AnimeStreaming = () => {
  const dispatch = useDispatch();
  const { episodeId } = useParams();
  const episodeStream = useSelector(
    (state) => state.anime.episodeStream?.sources
  );
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    dispatch(fetchEpisodeStreamById({ episodeId }));
  }, [dispatch, episodeId]);

  const handleClick = (url) => {
    setSelectedVideo(url);
  };

  return (
    <>
      <div>AnimeStreaming</div>
      {episodeStream?.map((episode) => (
        <div key={episode?.url}>
          <Button onClick={() => handleClick(episode.url)}>
            {episode.quality}
          </Button>
        </div>
      ))}
      {selectedVideo && <VideoPlayer url={selectedVideo} />}
    </>
  );
};

export default AnimeStreaming;
