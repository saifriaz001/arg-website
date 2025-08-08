import React, { useState, useEffect, useRef } from "react";
import { Country } from "country-state-city";

const CountryCodeDropdown = ({ formik }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const allCountries = Country.getAllCountries();
  const dropdownRef = useRef(null);

  const selectedCountry = allCountries.find(
    (c) => c.phonecode === formik.values.countryCode
  );

  const filteredCountries = allCountries.filter(
    (c) =>
      c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.phonecode.includes(searchTerm)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownRef]);

  const handleSelect = (phonecode) => {
    formik.setFieldValue("countryCode", phonecode);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className="custom-dropdown-container" ref={dropdownRef}>
      <label htmlFor="countryCode">Code*</label>
      <button
        type="button"
        className="custom-dropdown-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedCountry ? (
          <span>
            {selectedCountry.flag} +{selectedCountry.phonecode}
          </span>
        ) : (
          <span>Select Code</span>
        )}
        <span className="dropdown-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="custom-dropdown-list">
          <input
            type="text"
            className="dropdown-search-input"
            placeholder="Search country..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <ul>
            {filteredCountries.map((c) => (
              <li key={c.isoCode} onClick={() => handleSelect(c.phonecode)}>
                {c.flag} {c.name} (+{c.phonecode})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CountryCodeDropdown;
