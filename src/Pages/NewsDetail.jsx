import React from "react";
import { useParams } from "react-router-dom";
import { newsData, contacts } from "../utils/constants";

import NewsSideBar from "../NewsPageComponents/NewsSideBar";
import SubNewsHeroSection from "../NewsPageComponents/SubNewsHeroSection";
import "../yahya-css/news-detail.css";

const NewsDetail = () => {
  const { slug } = useParams();
  const newsItem = newsData.find(
    (n) => n.title.toLowerCase().replace(/\s+/g, "-") === slug
  );

  if (!newsItem) return <p>News not found</p>;
  const { title, types, date, body } = newsItem;
  return (
    <div className="news-detail-container">
      <SubNewsHeroSection title={title} types={types} date={date} />

      <div className="news-detail-body">
        <div className="news-body-section">
          {/* NOTE */}
          {body?.note && <p className="news-note">{body.note}</p>}

          {/* INTRODUCTION */}
          {body?.introduction && (
            <p className="news-intro">{body.introduction}</p>
          )}

          {/* SECTIONS */}
          {body?.sections?.map((section, index) => (
            <div key={index} className="news-section">
              <h3 className="section-heading">{section.heading}</h3>
              <p className="section-content">{section.content}</p>
            </div>
          ))}
        </div>

        <NewsSideBar contacts={contacts} />
      </div>
    </div>
  );
};

export default NewsDetail;
