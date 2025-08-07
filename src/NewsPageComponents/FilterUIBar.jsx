// components/FilterUIBar.jsx
import React, { useEffect, useRef, useState } from "react";
import "../yahya-css/filter-ui-bar.css"; // adjust path based on your project
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";
// import { dropdownOptions } from "../utils/constants";
import "../yahya-css/filter-ui-bar.css";

const FilterUIBar = ({ dropdownOptions, selectedFilters, onSelect }) => {
  const [activeFilter, setActiveFilter] = useState(null);

  const containerRef = useRef();

  const toggleDropdown = (filter) => {
    setActiveFilter((prev) => (prev === filter ? null : filter));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setActiveFilter(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="filter-bar-container" ref={containerRef}>
      {Object.keys(dropdownOptions).map((key) => {
        const selected = selectedFilters[key];
        const isActive = activeFilter === key;

        return (
          // Each filter is now in its own wrapper for better layout control
          <div key={key} className="filter-item-wrapper">
            <button
              className="filter-button"
              onClick={() => toggleDropdown(key)}
            >
              <span>
                <span className="capitalize">{key}</span>
                {selected && selected !== "All" && (
                  <span className="selected-text">: {selected}</span>
                )}
              </span>
              <span className="up-down-arrow">
                {isActive ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            {/* The panel is now inside the wrapper and will appear
                right below the button on mobile */}
            {isActive && (
              <div className="filter-panel">
                <div className="filter-options-grid">
                  {dropdownOptions[key].map((option, index) => (
                    <div
                      key={index}
                      className={`filter-option ${
                        selectedFilters[key] === option ? "selected" : ""
                      }`}
                      onClick={() => {
                        onSelect(key, option);
                        setActiveFilter(null);
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FilterUIBar;
