/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "../styles/AnimeCard.css";
import { useNavigate } from "react-router-dom";

const AnimeCard = ({ id, title, image, genres }) => {
  const Navigate = useNavigate();

  const handleButtonClick = () => {
    Navigate(`/anime-info/${id}`);
  };

  return (
    <>
      <div className="anime-card" onClick={handleButtonClick}>
        <h2 className="anime-card__title">{title}</h2>
        <img className="anime-card__image" src={image} alt={title} />
      </div>
    </>
  );
};

export default AnimeCard;
