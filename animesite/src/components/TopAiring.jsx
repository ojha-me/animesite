import { useEffect } from "react";
import { fetchAnimeList } from "../slices/animeSlice";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const animeList = useSelector((state) => state.anime.animeList.results);
  const status = useSelector((state) => state.anime.status);
  const error = useSelector((state) => state.anime.error);

  useEffect(() => {
    dispatch(fetchAnimeList());
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }
  console.log(animeList);

  return (
    <div>
      <h1>Anime List</h1>
      {animeList?.map((anime) => (
        <div key={anime?.id}>
          <h2>{anime?.title}</h2>
          <img src={anime?.image} alt={anime?.title} />
          <p>Genres: {anime?.genres.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
