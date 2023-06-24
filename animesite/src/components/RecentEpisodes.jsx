import { useEffect } from "react";
import { fetchRecentEpisodesList } from "../slices/animeSlice";
import { useSelector, useDispatch } from "react-redux";
import AnimeCard from "./AnimeCard";
import { Button } from "@chakra-ui/react";

const RecentEpisodes = () => {
  const dispatch = useDispatch();
  const recentEpisodes = useSelector((state) => state.anime.recentEpisodes);
  const displayingAnimes = recentEpisodes.results;
  const status = useSelector((state) => state.anime.status);
  const error = useSelector((state) => state.anime.error);
  const hasNextPage = useSelector((state) => state.anime.hasNextPage);
  const currentPage = useSelector((state) => state.anime.currentPage);

  useEffect(() => {
    dispatch(fetchRecentEpisodesList());
  }, [dispatch]);
  const nextPageFetch = () => {
    dispatch(fetchRecentEpisodesList(currentPage + 1));
  };
  const previousPageFetch = () => {
    dispatch(fetchRecentEpisodesList(currentPage - 1));
  };
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      Recent Episodes
      <div className="anime-card-container">
        {displayingAnimes?.map((displayingAnimes) => (
          <AnimeCard
            key={displayingAnimes?.id}
            title={displayingAnimes?.title}
            image={displayingAnimes?.image}
            genres={displayingAnimes?.genres || []}
            hasNextPage={hasNextPage}
          />
        ))}
        <Button onClick={nextPageFetch}>NextPage</Button>
        <Button onClick={previousPageFetch}>PreviousPage</Button>
      </div>
    </>
  );
};

export default RecentEpisodes;
