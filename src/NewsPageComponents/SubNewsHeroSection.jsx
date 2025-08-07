// components/SubNewsHeroSection.jsx
import React from "react";
import "../yahya-css/news-blogs.css";
import { FaCalendarAlt } from "react-icons/fa";

const SubNewsHeroSection = ({ title, types, date }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="sub-hero">
      <p className="sub-hero-type-tag">Press Release</p>
      <div className="sub-hero-date">
        <FaCalendarAlt className="mr-2" />
        <span>{formattedDate}</span>
      </div>
      <h1 className="sub-hero-title">{title}</h1>
      <div className="sub-hero-bottom-tag">
        <p className="sub-hero-type">{types}</p>
      </div>
    </div>
  );
};

export default SubNewsHeroSection;
