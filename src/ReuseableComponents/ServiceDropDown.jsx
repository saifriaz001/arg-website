import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import ReactDOM from "react-dom";

const ServiceDropdown = ({ option, text, services, selected, setSelected }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const dropdownRef = useRef(null);
  const [position, setPosition] = useState({ top: 0, left: 0, width: 0 });

  // Positioning logic
  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const scrollY = window.scrollY || window.pageYOffset;

      setPosition({
        top: rect.bottom + scrollY,
        left: 0, // always flush with viewport left
        width: window.innerWidth, // full screen width
      });
    }
  }, [isOpen]);


  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target) &&
        !triggerRef.current.contains(e.target)
      ) {
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

  const dropdown = isOpen ? (
    <div
      ref={dropdownRef}
      className="Dropdown-background"
      style={{
        position: "absolute",
        top: `${position.top}px`,
        left: 0,
        width: "99vw",
        boxSizing: "border-box",
      }}
    >
      {/* Default Option */}
      <div
        className={`Dropdown-selected text-white ${selected === option ? "" : ""
          }`}
        onClick={() => handleSelect(option)}
      >
        {option}
      </div>

      {/* Dynamic Options */}
      {services.map((s, idx) => (
        <div
          key={idx}
          className={ `Dropdown-selected  text-white transition ${selected === s.title ? " " : ""
            }`}
          onClick={() => handleSelect(s.title)}
        >
          {s.title}
        </div>
      ))}
    </div>
  ) : null;

  return (
    <div className="relative w-full">
      <div
        className="flex items-center space-x-6 cursor-pointer mb-6"
        ref={triggerRef}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div className= " w-32">
          <label className="Dropdown-selected w-24">{text}:</label>

        </div>
        
        <div  className=" flex flex-row items-center  gap-3  ">
          <div className="Dropdown-selected">
            {selected && selected !== option ? selected : option}

          </div>
          <div className=" strong  flex items-center">
            {isOpen ? <FaChevronUp  className="" size={12} /> : <FaChevronDown size={12} />}
          </div>

        </div>


      </div>

      {/* Portal to fixed position */}
      {typeof window !== "undefined" &&
        document.getElementById("dropdown-root") &&
        ReactDOM.createPortal(dropdown, document.getElementById("dropdown-root"))}
    </div>
  );
};

export default ServiceDropdown;
