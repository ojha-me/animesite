import { useEffect } from "react";
import { fetchTopAiringList } from "../slices/animeSlice";
import { useSelector, useDispatch } from "react-redux";
import AnimeCard from "./AnimeCard";
import "../styles/TopAiring.css";
import { Button } from "@chakra-ui/react";
import Loader from "./Loader";

const TopAiring = () => {
  const dispatch = useDispatch();
  const animeList = useSelector((state) => state.anime.topAiring);
  const displayingAnimes = animeList.results;
  const status = useSelector((state) => state.anime.status);
  const error = useSelector((state) => state.anime.error);
  const hasNextPage = useSelector((state) => state.anime.hasNextPage);
  const currentPage = useSelector((state) => state.anime.currentPage);

  useEffect(() => {
    dispatch(fetchTopAiringList(currentPage + 1));
  }, []);
  // const nextPageFetch =
  const previousPageFetch = () => {
    console.log("Preivous page fetch fired");

    console.log(currentPage);
    dispatch(fetchTopAiringList(currentPage - 1));
  };

  const fetchNextPageData = () => {
    console.log(currentPage);
    dispatch(fetchTopAiringList(currentPage + 1));
  };
  if (status === "loading") {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="anime-card-container">
        {displayingAnimes?.map((displayingAnimes) => (
          <AnimeCard
            key={displayingAnimes?.id}
            id={displayingAnimes?.id}
            title={displayingAnimes?.title}
            image={displayingAnimes?.image}
            genres={displayingAnimes?.genres || []}
            hasNextPage={hasNextPage}
          />
        ))}
      </div>
      <div className="top-airing-buttons-container">
        {currentPage > 1 && (
          <Button
            colorScheme="purple"
            size={"md"}
            padding={4}
            variant={"solid"}
            verticalAlign={"Center"}
            onClick={() => previousPageFetch()}
          >
            Previous
          </Button>
        )}
        {hasNextPage && (
          <Button
            colorScheme="purple"
            size={"md"}
            padding={4}
            variant={"solid"}
            verticalAlign={"Center"}
            onClick={() => {
              fetchNextPageData();
            }}
          >
            Load More
          </Button>
        )}
      </div>
    </>
  );
};

export default TopAiring;
