import React from "react";
import { FaChevronRight } from "react-icons/fa";
import "../yahya-css/careers.css";

const ConnectCard = ({ title, buttons }) => {
  return (
    <div className="connect-card">
      <h3 className="connect-card-title">{title}</h3>
      <div className="connect-card-buttons">
        {buttons.map((button, index) => (
          <a href={button.link} key={index} className="transparent-btn">
            <span>{button.text}</span>
            <FaChevronRight className="right-arrow" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default ConnectCard;
