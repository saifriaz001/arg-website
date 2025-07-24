// components/FilterUIBar.jsx
import React, { useEffect, useRef, useState } from "react";
import "../yahya-css/filter-ui-bar.css"; // adjust path based on your project
import {
  FaAngleDown,
  FaAngleUp,
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa6";


const dropdownOptions = {
  Market: [
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
  Regions: ["Middle East & Africa", "Americas", "Europe", "APAC"],
  Types: [
    "Awards",
    "Financials",
    "News",
    "People",
    "Products",
    "Projects",
    "Statements",
  ],
  Year: [
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

const FilterUIBar = () => {
  const [activeFilter, setActiveFilter] = useState(null);
  const [panelTop, setPanelTop] = useState(0);
  const containerRef = useRef();

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
        {Object.keys(dropdownOptions).map((key) => (
          <button
            key={key}
            onClick={() => toggleDropdown(key)}
            className="filter-button"
          >
            {key}
            <span className="inline-block relative top-[2px] ml-1">
              {activeFilter === key ? <FaChevronUp /> : <FaChevronDown />}
            </span>
          </button>
        ))}
      </div>

      {/* Dropdown Panel */}
      {activeFilter && (
        <div className="filter-panel" style={{ top: `${panelTop}px` }}>
          <div className="filter-options-grid">
            {dropdownOptions[activeFilter].map((option, index) => (
              <div key={index} className="filter-option">
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
