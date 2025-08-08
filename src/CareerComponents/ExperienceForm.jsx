import React from "react";
import { Field, ErrorMessage } from "formik";

const ExperienceForm = ({ form, push, remove }) => {
  const { values } = form;

  return (
    <div className="form-section">
      <h3 className="section-heading">Experience</h3>
      {values.experience.map((exp, index) => (
        <div key={index} className="form-array-item">
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
            <label htmlFor={`experience.${index}.location`}>
              Office location
            </label>
            <Field
              name={`experience.${index}.location`}
              type="text"
              className="form-input"
            />
          </div>
          <div className="form-group">
            <label htmlFor={`experience.${index}.description`}>
              Description
            </label>
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
                disabled={values.experience[index].currentlyWorkHere}
              />
              <ErrorMessage
                name={`experience.${index}.endDate`}
                component="div"
                className="form-error"
              />
            </div>
          </div>
          <div className="form-group checkbox-group">
            <Field
              name={`experience.${index}.currentlyWorkHere`}
              type="checkbox"
            />
            <label htmlFor={`experience.${index}.currentlyWorkHere`}>
              I currently work here
            </label>
          </div>
          <div className="form-array-buttons">
            <button
              type="button"
              onClick={() => remove(index)}
              className="transparent-btn"
            >
              Cancel
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={() =>
          push({
            title: "",
            company: "",
            location: "",
            description: "",
            startDate: "",
            endDate: "",
            currentlyWorkHere: false,
          })
        }
        className="color-btn"
      >
        Add Experience
      </button>
    </div>
  );
};

export default ExperienceForm;
