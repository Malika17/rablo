// src/components/SearchBar.js
import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Search = ({ onSearch }) => {
  const [searchId, setSearchId] = useState("");

  const handleSearch = () => {
    onSearch(searchId);
  };

  return (
    <div className="search-btn">
      <input
        className="search-input"
        type="text"
        value={searchId}
        onChange={(e) => setSearchId(e.target.value)}
        placeholder="Search by ID"
      />
      <div className="search-icon-btn">
        <button className="search-icon" onClick={handleSearch}>
          <SearchOutlinedIcon />
        </button>
      </div>
    </div>
  );
};

export default Search;
