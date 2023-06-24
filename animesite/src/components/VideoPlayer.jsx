import { useEffect, useRef } from "react";
import Hls from "hls.js";

const VideoPlayer = ({ url }) => {
  const videoRef = useRef(null);
  const hls = useRef(null);

  useEffect(() => {
    if (Hls.isSupported()) {
      hls.current = new Hls();
      hls.current.loadSource(url);
      hls.current.attachMedia(videoRef.current);
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = url;
    }
  }, [url]);

  return <video ref={videoRef} controls />;
};

export default VideoPlayer;
