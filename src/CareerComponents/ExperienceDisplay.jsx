import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ExperienceDisplay = ({ item, onEdit, onDelete }) => {
  // FIX: Destructure 'item'
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    });
  };

  const startDate = formatDate(item.startDate);
  const endDate =
    item.currentlyWorkHere || !item.endDate
      ? "Present"
      : formatDate(item.endDate);

  return (
    <div className="display-card">
      <div className="display-card-content">
        {/* FIX: Use 'item' properties */}
        <h4 className="display-card-title">{item.title}</h4>
        <p className="display-card-subtitle">
          {item.company} · {startDate} - {endDate}
        </p>
        <p className="display-card-description">{item.description}</p>
      </div>
      <div className="display-card-actions">
        <button type="button" onClick={onEdit}>
          <FaEdit />
        </button>
        <button type="button" onClick={onDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default ExperienceDisplay;
