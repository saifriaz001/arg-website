// components/HeroSection.jsx
import React from "react";

const HeroSectionNews = ({ title, background }) => {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-overlay" />
      <h1 className="hero-heading">{title}</h1>
    </div>
  );
};

export default HeroSectionNews;
