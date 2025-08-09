import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const ExperienceDisplay = ({ experience, onEdit, onDelete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      timeZone: "UTC",
    });
  };

  const startDate = formatDate(experience.startDate);
  // --- THE FIX: Show "Present" if the checkbox is checked or endDate is missing ---
  const endDate =
    experience.currentlyWorkHere || !experience.endDate
      ? "Present"
      : formatDate(experience.endDate);

  return (
    <div className="display-card">
      <div className="display-card-content">
        <h4 className="display-card-title">{experience.title}</h4>
        <p className="display-card-subtitle">
          {experience.company} · {startDate} - {endDate}
        </p>
        <p className="display-card-description">{experience.description}</p>
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
