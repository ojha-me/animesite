import { useEffect, useState } from "react";
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
  console.log(
    "🚀 ~ file: AnimeStreaming.jsx:14 ~ AnimeStreaming ~ episodeStream:",
    episodeStream
  );
  const [selectedVideo, setSelectedVideo] = useState(null);
  useEffect(() => {
    dispatch(fetchEpisodeStreamById({ episodeId }));
  }, [dispatch, episodeId]);

  const handleClick = (url) => {
    setSelectedVideo(url);
  };

  return (
    <div className="animestream">
      <div className="animestream-content">
        <h1 className="animestreaming-content">Select the quality</h1>
        <div className="quality">
          {episodeStream?.map((episode) => (
            <div key={episode?.url}>
              <Button w={120} onClick={() => handleClick(episode.url)}>
                {episode.quality}
              </Button>
            </div>
          ))}
        </div>
      </div>
      <div className="videoPlayer">
        {selectedVideo && <VideoPlayer url={selectedVideo} />}
      </div>
    </div>
  );
};

export default AnimeStreaming;
