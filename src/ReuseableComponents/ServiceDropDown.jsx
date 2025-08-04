import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const ServiceDropdown = ({ option, text, services, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full flex items-center mb-6" ref={dropdownRef}>
      <label className="text-gray-600 text-sm mr-2">{text}:</label>

      {/* Toggle Button */}
      <div
        className="text-sm px-2 py-3 rounded cursor-pointer flex items-center space-x-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selected && selected !== option ? selected : option}</span>
        {isOpen ? <FaChevronUp size={10} /> : <FaChevronDown size={10} />}
      </div>

      {/* Dropdown */}
      {isOpen && (
        <>
          {/* Overlay to close when clicking outside on lg screens */}
          <div
            className="hidden lg:block fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div
            className={`
              z-50 p-4 max-h-[400px] overflow-y-auto 
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6
              bg-[#003840] text-white rounded shadow-lg 
              absolute top-full mt-2 w-full 
              lg:fixed lg:left-0 lg:right-0 lg:w-full lg:top-[100px] lg:mt-0 lg:rounded-none lg:px-20
            `}
          >
            {/* "All" Option */}
            <div
              className={`cursor-pointer text-sm hover:text-[#D3FF48] transition ${
                selected === option ? "text-[#D3FF48] font-semibold" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>

            {/* Service Options */}
            {services.map((s, idx) => (
              <div
                key={idx}
                onClick={() => handleSelect(s.title)}
                className={`cursor-pointer text-sm hover:text-[#D3FF48] transition ${
                  selected === s.title ? "text-[#D3FF48] font-semibold" : ""
                }`}
              >
                {s.title}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ServiceDropdown;
