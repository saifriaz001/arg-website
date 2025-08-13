import React from "react";
import { Field, ErrorMessage } from "formik";

const EducationForm = ({ index, onSave, onCancel }) => {
  return (
    <div className="form-array-item">
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor={`education.${index}.institution`}>
            College/University*
          </label>
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
          <label htmlFor={`education.${index}.course`}>Course*</label>
          <Field
            name={`education.${index}.course`}
            type="text"
            className="form-input"
          />
          <ErrorMessage
            name={`education.${index}.course`}
            component="div"
            className="form-error"
          />
        </div>
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor={`education.${index}.branch`}>Branch*</label>
          <Field
            name={`education.${index}.branch`}
            type="text"
            className="form-input"
          />
          <ErrorMessage
            name={`education.${index}.branch`}
            component="div"
            className="form-error"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`education.${index}.schoolLocation`}>Location*</label>
          <Field
            name={`education.${index}.schoolLocation`}
            type="text"
            className="form-input"
          />
          <ErrorMessage
            name={`education.${index}.schoolLocation`}
            component="div"
            className="form-error"
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
