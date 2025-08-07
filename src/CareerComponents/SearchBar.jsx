import React from "react";
import { FaChevronRight } from "react-icons/fa";

const SearchBar = ({
  keyword,
  onKeywordChange,
  location,
  onLocationChange,
  onSearch,
  onClear,
}) => (
  <div className="bg-[var(--color-strong)] px-2">
    <div className="max-w-7xl mx-auto">
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="job, title or keywords"
          className="search-input"
          value={keyword}
          onChange={(e) => onKeywordChange(e.target.value)}
        />
        <input
          type="text"
          placeholder="city, state or country"
          className="search-input"
          value={location}
          onChange={(e) => onLocationChange(e.target.value)}
        />
        <button onClick={onSearch} className="color-btn whitespace-nowrap">
          <span>Search</span> <FaChevronRight className="right-arrow" />
        </button>
        <button onClick={onClear} className="transparent-btn whitespace-nowrap">
          <span>view all jobs</span> <FaChevronRight className="right-arrow" />
        </button>
      </div>
    </div>
  </div>
);

export default SearchBar;
