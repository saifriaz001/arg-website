import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const EducationDisplay = ({ education, onEdit, onDelete }) => (
  <div className="display-card">
    <div className="display-card-content">
      <h4 className="display-card-title">{education.institution}</h4>
      <p className="display-card-subtitle">
        {education.degree} in {education.major}
      </p>
      <p className="display-card-description">{education.description}</p>
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

export default EducationDisplay;
