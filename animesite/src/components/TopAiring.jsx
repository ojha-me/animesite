import { useEffect } from "react";
import { fetchTopAiringList } from "../slices/animeSlice";
import { useSelector, useDispatch } from "react-redux";
import AnimeCard from "./AnimeCard";
import "../styles/TopAiring.css";
import { Button } from "@chakra-ui/react";

const TopAiring = () => {
  const dispatch = useDispatch();
  const animeList = useSelector((state) => state.anime.topAiring);
  const displayingAnimes = animeList.results;
  const status = useSelector((state) => state.anime.status);
  const error = useSelector((state) => state.anime.error);
  const hasNextPage = useSelector((state) => state.anime.hasNextPage);
  const currentPage = useSelector((state) => state.anime.currentPage);
  useEffect(() => {
    dispatch(fetchTopAiringList());
  }, [dispatch]);

  // const nextPageFetch =
  const previousPageFetch = () => {
    dispatch(fetchTopAiringList(currentPage - 1));
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  return (
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

      <Button
        colorScheme="purple"
        size={"md"}
        padding={4}
        variant={"solid"}
        verticalAlign={"Center"}
        onClick={() => {
          dispatch(fetchTopAiringList(currentPage + 1));
        }}
      >
        Next
      </Button>
      <Button
        colorScheme="purple"
        size={"md"}
        padding={4}
        variant={"solid"}
        verticalAlign={"Center"}
        onClick={previousPageFetch}
      >
        Previous
      </Button>
    </div>
  );
};

export default TopAiring;
