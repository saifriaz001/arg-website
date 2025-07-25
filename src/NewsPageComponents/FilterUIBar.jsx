// components/FilterUIBar.jsx
import React, { useEffect, useRef, useState } from "react";
import "../yahya-css/filter-ui-bar.css"; // adjust path based on your project
import { FaChevronUp, FaChevronDown } from "react-icons/fa6";

const dropdownOptions = {
  market: [
    "Cities",
    "Commercial & Residential",
    "Education",
    "Energy",
    "Healthcare",
    "Industrial",
    "Justice",
    "Leisure",
    "National Governments",
    "Oil, Gas & Chemicals",
    "Sports and Venues",
    "Transportation",
    "Water",
  ],
  regions: ["Middle East & Africa", "Americas", "Europe", "APAC"],
  types: [
    "Awards",
    "Financials",
    "News",
    "People",
    "Products",
    "Projects",
    "Statements",
  ],
  year: [
    "All",
    "2025",
    "2024",
    "2023",
    "2022",
    "2021",
    "2020",
    "2019",
    "2018",
    "2017",
    "2016",
    "2015",
    "2014",
    "2013",
    "2012",
    "2011",
    "2010",
  ],
};

const FilterUIBar = ({ selectedFilters, onSelect }) => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [panelTop, setPanelTop] = useState(0);
  const containerRef = useRef();

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const toggleDropdown = (filter) => {
    setActiveFilter((prev) => (prev === filter ? null : filter));
  };

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setPanelTop(rect.bottom + window.scrollY);
    }
  }, [activeFilter]);

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
    <div ref={containerRef}>
      {/* Filter Buttons */}
      <div className="filter-bar-container">
        {Object.keys(dropdownOptions).map((key) => {
          const label = capitalizeFirstLetter(key);
          const selected = selectedFilters[key];
          return (
            <button
              key={key}
              onClick={() => toggleDropdown(key)}
              className="filter-button"
            >
              {label}
              {selected && selected !== "All" && (
                <span className="selected-text">: {selected}</span>
              )}
              <span className="up-down-arrow">
                {activeFilter === key ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dropdown Panel */}
      {activeFilter && (
        <div className="filter-panel" style={{ top: `${panelTop}px` }}>
          <div className="filter-options-grid">
            {dropdownOptions[activeFilter].map((option, index) => (
              <div
                key={index}
                className={`filter-option ${
                  selectedFilters[activeFilter] === option ? "selected" : ""
                }`}
                onClick={() => {
                  onSelect(activeFilter, option);
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
};

export default FilterUIBar;
