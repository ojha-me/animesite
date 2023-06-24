import { Button } from "@chakra-ui/react";
import "../styles/AnimeCard.css";
import { useNavigate } from "react-router-dom";

const AnimeCard = ({ id, title, image, genres }) => {
  const Navigate = useNavigate();

  const handleButtonClick = () => {
    Navigate(`/anime-info/${id}`);
  };

  const handleStreamButtonClick = () => {
    Navigate(`/stream-anime?episodeId${id}`);
  };

  return (
    <>
      <div className="anime-card">
        <h2 className="anime-card__title">{title}</h2>
        <img className="anime-card__image" src={image} alt={title} />
        <p className="anime-card__genres">Genres: {genres.join(", ")}</p>

        <Button
          onClick={handleButtonClick}
          colorScheme="black"
          size={"md"}
          padding={4}
          variant={"ghost"}
          verticalAlign={"Center"}
        >
          More
        </Button>
        <Button
          onClick={handleStreamButtonClick}
          colorScheme="black"
          size={"md"}
          padding={4}
          variant={"ghost"}
          verticalAlign={"Center"}
        >
          Stream Now
        </Button>
      </div>
    </>
  );
};

export default AnimeCard;
