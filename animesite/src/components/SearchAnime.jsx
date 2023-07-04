import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import "../styles/SearchAnime.css";

const SearchAnime = () => {
  const Navigate = useNavigate();
  const [query, setQuery] = useState("");
  const handleSearch = () => {
    Navigate(`/search/${encodeURIComponent(query)}`);
  };

  return (
    <>
      <div className="search-box">
        <input
          className="search-input"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSearch();
            }
          }}
        />
        <button className="search-icon" onClick={handleSearch}>
          <SearchIcon height={30} width={20} />
        </button>
      </div>
    </>
  );
};

export default SearchAnime;
