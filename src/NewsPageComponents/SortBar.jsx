// components/SortBar.jsx
import React from "react";
import "../yahya-css/filter-ui-bar.css";

const SortBar = ({ onClear, onSortChange }) => {
  return (
    <div className="sort-clear-bar">
      <div className="sort-buttons">
        <span className="font-medium">Sort by:</span>
        <button className="sort-button" onClick={() => onSortChange("newest")}>
          Newest
        </button>
        <span>|</span>
        <button className="sort-button" onClick={() => onSortChange("oldest")}>
          Oldest
        </button>
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
