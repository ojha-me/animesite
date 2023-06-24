import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

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
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
};

export default SearchAnime;
