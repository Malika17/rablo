// src/components/SearchBar.js
import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [searchId, setSearchId] = useState("");

  const handleSearch = () => {
    onSearch(searchId);
  };

  return (
    <div>
      <input
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Search by ID"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
