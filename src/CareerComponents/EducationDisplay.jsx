import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const EducationDisplay = (
  { item, onEdit, onDelete } // FIX: Destructure 'item'
) => (
  <div className="display-card">
    <div className="display-card-content">
      {/* FIX: Use 'item' properties */}
      <h4 className="display-card-title">{item.institution}</h4>
      <p className="display-card-subtitle">
        {item.degree} in {item.major}
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

export default EducationDisplay;
