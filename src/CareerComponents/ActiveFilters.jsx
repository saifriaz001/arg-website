import React from "react";
import { FaTimes } from "react-icons/fa";
import "../yahya-css/careers.css";

const ActiveFilters = ({ activeFilters, onRemove, onClearAll }) => {
  // Don't render anything if there are no filters
  if (Object.keys(activeFilters).length === 0) {
    return null;
  }

  return (
    <div className="active-filters-container">
      <h3 className="active-filters-title">Active Filters</h3>
      <div className="active-filters-pills">
        {Object.entries(activeFilters).map(([key, value]) => (
          <button
            key={key}
            onClick={() => onRemove(key)}
            className="active-filter-pill"
          >
            <FaTimes className="border text-[var(--color-button-primary)] bg-white rounded-4xl " />
            <span>{value}</span>
          </button>
        ))}
        <button onClick={onClearAll} className="active-filter-pill clear-all">
          <FaTimes className="border text-[var(--color-connect-card)] bg-white rounded-4xl text-md" />
          <span>Clear All</span>
        </button>
      </div>
    </div>
  );
};

export default ActiveFilters;
