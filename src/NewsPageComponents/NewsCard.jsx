// components/NewsCard.jsx
import { IoIosArrowForward } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import React from "react";
import "../yahya-css/news-blogs.css";

const NewsCard = ({ item }) => {
  const formattedDate = new Date(item.date)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
  return (
    <div className="news-card">
      <div className="news-date">
        <span className="mr-2">
          <FaCalendarAlt />
        </span>
        <span className="font-semibold">{formattedDate}</span>
      </div>
      <h2 className="news-title">{item.title}</h2>
      <p className="news-type">{item.types}</p>
      <p className="news-summary">{item.summary}</p>
      <button className="read-more-button">
        Read more
        <span className="inline-block relative top-[3px] ml-1">
          <IoIosArrowForward />
        </span>
      </button>
    </div>
  );
};

export default NewsCard;
