// components/NewsCard.jsx
import { IoIosArrowForward } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import React from "react";
import "../yahya-css/news-blogs.css";
import { Link } from "react-router-dom";

const NewsCard = ({ item }) => {
  const slug = item.title.toLowerCase().replace(/\s+/g, "-");

  const formattedDate = new Date(item.date)
    .toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    .toUpperCase();
  const snippet =
    item.body?.introduction?.split(" ").slice(0, 55).join(" ") + " ...";

  return (
    <div className="news-card">
      <div className="news-date">
        <span className="mr-2">
          <FaCalendarAlt />
        </span>
        <span className="font-semibold">{formattedDate}</span>
      </div>

      <Link to={`/news-blogs/${slug}`}>
        <h2 className="news-title">{item.title}</h2>
      </Link>
      <p className="news-type">{item.types}</p>
      <p className="news-summary">{snippet}</p>
      <Link to={`/news-blogs/${slug}`} className="read-more-button group">
        Read more
        <span className="read-more-arrow">
          <IoIosArrowForward />
        </span>
      </Link>
    </div>
  );
};

export default React.memo(NewsCard);
