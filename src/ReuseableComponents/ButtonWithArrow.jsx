// src/ReuseableComponents/ButtonWithArrow.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const ButtonWithArrow = ({ to, label = "Read more" }) => {
  return (
    <Link to={to} className="group btn-with-arrow">
      <span>{label}</span>
      {/* <span className="transform transition-transform duration-300 group-hover:translate-x-1">
        &rarr;
      </span> */}
      <FaChevronRight className="transform transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
};

export default ButtonWithArrow;
