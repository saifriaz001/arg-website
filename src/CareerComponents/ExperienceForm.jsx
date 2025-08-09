import React, { useEffect } from "react";
import { Field, ErrorMessage } from "formik";

const ExperienceForm = ({ index, onSave, onCancel, formik }) => {
  // Get the value of the checkbox for the specific item being edited.
  const currentlyWorkHere = formik.values.experience[index]?.currentlyWorkHere;

  // --- THE FIX: This useEffect automatically clears the end date ---
  useEffect(() => {
    // This code runs every time the 'currentlyWorkHere' checkbox changes.
    if (currentlyWorkHere) {
      // If the box is checked, we set the endDate to null to prevent validation errors.
      formik.setFieldValue(`experience.${index}.endDate`, null);
    }
  }, [currentlyWorkHere, index, formik.setFieldValue]); // It re-runs only when these values change.

  return (
    <div className="form-array-item">
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor={`experience.${index}.title`}>Title*</label>
          <Field
            name={`experience.${index}.title`}
            type="text"
            className="form-input"
          />
          <ErrorMessage
            name={`experience.${index}.title`}
            component="div"
            className="form-error"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`experience.${index}.company`}>Company</label>
          <Field
            name={`experience.${index}.company`}
            type="text"
            className="form-input"
          />
        </div>
      </div>
      <div className="form-group">
        <label htmlFor={`experience.${index}.location`}>Office location</label>
        <Field
          name={`experience.${index}.location`}
          type="text"
          className="form-input"
        />
      </div>
      <div className="form-group">
        <label htmlFor={`experience.${index}.description`}>Description</label>
        <Field
          name={`experience.${index}.description`}
          as="textarea"
          className="form-input"
        />
      </div>
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor={`experience.${index}.startDate`}>From*</label>
          <Field
            name={`experience.${index}.startDate`}
            type="date"
            className="form-input"
          />
          <ErrorMessage
            name={`experience.${index}.startDate`}
            component="div"
            className="form-error"
          />
        </div>
        <div className="form-group">
          <label htmlFor={`experience.${index}.endDate`}>To*</label>
          <Field
            name={`experience.${index}.endDate`}
            type="date"
            className="form-input"
            disabled={currentlyWorkHere}
          />
          <ErrorMessage
            name={`experience.${index}.endDate`}
            component="div"
            className="form-error"
          />
        </div>
      </div>
      <div className="form-group checkbox-group">
        <Field name={`experience.${index}.currentlyWorkHere`} type="checkbox" />
        <label htmlFor={`experience.${index}.currentlyWorkHere`}>
          I currently work here
        </label>
      </div>
      <div className="form-array-buttons">
        <button type="button" onClick={onCancel} className="transparent-btn">
          Cancel
        </button>
        <button type="button" onClick={onSave} className="color-btn">
          Save
        </button>
      </div>
    </div>
  );
};

export default ExperienceForm;
