import React, { useState } from "react";
const OPTIONS_LIMIT = 3;
const FilterGroup = ({ title, options, onSelectFilter }) => {
  const [isOpen, setIsOpen] = useState(title === "Filter by Country"); // Default open for demo
  const [visibleOptionsCount, setVisibleOptionsCount] = useState(OPTIONS_LIMIT);

  const handleOptionsCount = () => {
    setVisibleOptionsCount((prev) => prev + OPTIONS_LIMIT);
  };

  return (
    <div className="filter-group">
      <div className="filter-group-header">
        {/* <div className="flex-col"> */}
        <div
          className="flex justify-between"
          onClick={() => {
            setIsOpen(!isOpen);
            setVisibleOptionsCount(OPTIONS_LIMIT);
          }}
        >
          <span>{title}</span>
          <span className="filter-group-icon">{isOpen ? "−" : "+"}</span>
        </div>
        <div>
          {isOpen && (
            <div className="filter-group-options">
              {options.slice(0, visibleOptionsCount).map((option, index) => (
                <button
                  key={index}
                  className="filter-option"
                  onClick={() => onSelectFilter(title, option.name)}
                >
                  {option.name} ({option.count})
                </button>
              ))}
              {visibleOptionsCount < options.length && (
                <button
                  className="filter-more-link"
                  onClick={handleOptionsCount}
                >
                  +More
                </button>
              )}
            </div>
          )}
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default FilterGroup;
