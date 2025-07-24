// components/SortBar.jsx
import React from "react";

const SortBar = ({ onClear }) => {
  return (
    <div className="sort-clear-bar">
      <div className="sort-buttons">
        <span className="font-medium">Sort by:</span>
        <button className="sort-button">Newest</button>
        <span>|</span>
        <button className="sort-button">Oldest</button>
      </div>
      <div>
        <button className="clear-button" onClick={onClear}>
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default SortBar;
