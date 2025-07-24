// components/NewsCard.jsx
import React from "react";

const NewsCard = ({ item }) => {
  return (
    <div className="news-card">
      <div className="news-date">
        <span className="mr-2">📅</span>
        <span className="font-semibold">{item.date}</span>
      </div>
      <h2 className="news-title">{item.title}</h2>
      <p className="news-type">{item.types}</p>
      <p className="news-summary">{item.summary}</p>
      <button className="read-more-button">
        Read more <span>→</span>
      </button>
    </div>
  );
};

export default NewsCard;
