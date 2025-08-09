import React from "react";
import { Field, ErrorMessage } from "formik";

const EducationForm = ({ index, onSave, onCancel }) => {
  return (
    <div className="form-array-item">
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor={`education.${index}.institution`}>Institution*</label>
          <Field
            name={`education.${index}.institution`}
            type="text"
            className="form-input"
          />
          <ErrorMessage
            name={`education.${index}.institution`}
            component="div"
            className="form-error"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`education.${index}.major`}>Major</label>
          <Field
            name={`education.${index}.major`}
            type="text"
            className="form-input"
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor={`education.${index}.degree`}>Degree</label>
          <Field
            name={`education.${index}.degree`}
            type="text"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`education.${index}.schoolLocation`}>
            School location
          </label>
          <Field
            name={`education.${index}.schoolLocation`}
            type="text"
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor={`education.${index}.description`}>Description</label>
        <Field
          name={`education.${index}.description`}
          as="textarea"
          className="form-input"
        />
      </div>
      <div className="form-array-buttons">
        <button type="button" onClick={onCancel} className="transparent-btn">
          Cancel
        </button>
        <button
          type="button"
          onClick={() => onSave(index)}
          className="color-btn"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EducationForm;
