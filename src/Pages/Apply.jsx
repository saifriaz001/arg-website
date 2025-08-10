import React, { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import { jobs } from "../utils/constants";
import {
  applicationValidationSchema,
  experienceSchema,
  educationSchema,
} from "../utils/validationSchemas";

import ExperienceForm from "../CareerComponents/ExperienceForm";
import EducationForm from "../CareerComponents/EducationForm";
import ExperienceDisplay from "../CareerComponents/ExperienceDisplay";
import EducationDisplay from "../CareerComponents/EducationDisplay";

import "../yahya-css/careers.css";

const Apply = () => {
  const [editingExperienceIndex, setEditingExperienceIndex] = useState(null);
  const [editingEducationIndex, setEditingEducationIndex] = useState(null);

  const [originalExperience, setOriginalExperience] = useState(null);
  const [originalEducation, setOriginalEducation] = useState(null);

  const [isNewEntry, setIsNewEntry] = useState(false);
  const fileInputRef = useRef(null);

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    phone: "",
    jobTitle: "",
    resume: null,
    message: "",
    experience: [],
    education: [],
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("--- Form Submission Data ---");
    console.log(values);

    if (values.experience.length === 0) {
      console.log("Applicant is a Fresher (No experience submitted)");
    }
    console.log("Resume Attached:", values.resume ? "Yes" : "No");

    alert("Application submitted! Check the console for the form data.");
    setSubmitting(false); 
    resetForm();

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="apply-container mt-5 md:mt-10">
      <div className="page-section">
        <h1 className="page-title">Apply for a Job</h1>
        <p className="page-subtitle">We're excited to hear from you!</p>

        <Formik
          initialValues={initialValues}
          validationSchema={applicationValidationSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => {
            const handleSaveExperience = async (index) => {
              try {
                await experienceSchema.validate(
                  formik.values.experience[index],
                  { abortEarly: false }
                );
                setEditingExperienceIndex(null);
                setIsNewEntry(false);
              } catch (err) {
                // This block runs if validation fails
                const errors = {};
                err.inner.forEach((error) => {
                  errors[error.path] = error.message;
                });
                const newErrors = { ...formik.errors };
                if (!newErrors.experience) newErrors.experience = [];
                newErrors.experience[index] = errors;
                formik.setErrors(newErrors);
              }
            };

            const handleCancelExperience = (index, remove) => {
              if (originalExperience) {
                // If a backup exists, it was an existing entry. Revert it.
                formik.setFieldValue(`experience.${index}`, originalExperience);
              } else {
                // If no backup exists, it was a new entry. Remove it.
                remove(index);
              }
              setEditingExperienceIndex(null);
              setOriginalExperience(null); // Always clean up state
            };

            const handleSaveEducation = async (index) => {
              try {
                await educationSchema.validate(formik.values.education[index], {
                  abortEarly: false,
                });
                setEditingEducationIndex(null);
                setIsNewEntry(false);
              } catch (err) {
                // This block runs if validation fails
                const errors = {};
                err.inner.forEach((error) => {
                  errors[error.path] = error.message;
                });
                const newErrors = { ...formik.errors };
                if (!newErrors.education) newErrors.education = [];
                newErrors.education[index] = errors;
                formik.setErrors(newErrors);
              }
            };

            const handleCancelEducation = (index, remove) => {
              if (originalEducation) {
                // If a backup exists, it was an existing entry. Revert it.
                formik.setFieldValue(`education.${index}`, originalEducation);
              } else {
                // If no backup exists, it was a new entry. Remove it.
                remove(index);
              }
              setEditingEducationIndex(null);
              setOriginalEducation(null); // Always clean up state
            };

            return (
              <Form className="form-container">
                <div className="form-grid">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name*</label>
                    <Field
                      name="firstName"
                      type="text"
                      className="form-input"
                    />
                    <ErrorMessage
                      name="firstName"
                      component="div"
                      className="form-error"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name*</label>
                    <Field name="lastName" type="text" className="form-input" />
                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="form-error"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email*</label>
                    <Field name="email" type="email" className="form-input" />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="form-error"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="confirmEmail">Confirm Email*</label>
                    <Field
                      name="confirmEmail"
                      type="email"
                      className="form-input"
                    />
                    <ErrorMessage
                      name="confirmEmail"
                      component="div"
                      className="form-error"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone*</label>
                    <Field name="phone" type="tel" className="form-input" />
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="form-error"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="jobTitle">Job Title*</label>
                  <Field as="select" name="jobTitle" className="form-input">
                    <option value="">Select a job title</option>
                    {jobs.map((job) => (
                      <option key={job.title} value={job.title}>
                        {job.title}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="jobTitle"
                    component="div"
                    className="form-error"
                  />
                </div>

                <div className="form-section">
                  <h3 className="section-heading">Experience</h3>
                  <FieldArray name="experience">
                    {({ remove, push }) => (
                      <div>
                        {formik.values.experience.map((exp, index) =>
                          editingExperienceIndex === index ? (
                            <ExperienceForm
                              key={index}
                              index={index}
                              formik={formik}
                              onSave={() => handleSaveExperience(index)}
                              onCancel={() =>
                                handleCancelExperience(index, remove)
                              }
                            />
                          ) : (
                            <ExperienceDisplay
                              key={index}
                              experience={exp}
                              onEdit={() => {
                                setOriginalExperience(
                                  formik.values.experience[index]
                                );
                                setIsNewEntry(false);
                                setEditingExperienceIndex(index);
                              }}
                              onDelete={() => remove(index)}
                            />
                          )
                        )}
                        {editingExperienceIndex === null && (
                          <button
                            type="button"
                            onClick={() => {
                              const newExperience = {
                                title: "",
                                company: "",
                                location: "",
                                description: "",
                                startDate: "",
                                endDate: "",
                                currentlyWorkHere: false,
                              };
                              const newIndex = formik.values.experience.length;
                              push(newExperience);
                              setIsNewEntry(true);
                              setEditingExperienceIndex(newIndex);
                            }}
                            className="color-btn"
                          >
                            Add Experience
                          </button>
                        )}
                      </div>
                    )}
                  </FieldArray>
                </div>

                <div className="form-section">
                  <h3 className="section-heading">Education</h3>
                  <FieldArray name="education">
                    {({ remove, push }) => (
                      <div>
                        {formik.values.education.map((edu, index) =>
                          editingEducationIndex === index ? (
                            <EducationForm
                              key={index}
                              index={index}
                              onSave={() => handleSaveEducation(index)}
                              onCancel={() =>
                                handleCancelEducation(index, remove)
                              }
                            />
                          ) : (
                            <EducationDisplay
                              key={index}
                              education={edu}
                              onEdit={() => {
                                setOriginalEducation(
                                  formik.values.education[index]
                                );
                                setIsNewEntry(false);
                                setEditingEducationIndex(index);
                              }}
                              onDelete={() => remove(index)}
                            />
                          )
                        )}
                        {editingEducationIndex === null && (
                          <button
                            type="button"
                            onClick={() => {
                              const newEducation = {
                                institution: "",
                                major: "",
                                degree: "",
                                schoolLocation: "",
                                description: "",
                              };
                              const newIndex = formik.values.education.length;
                              push(newEducation);
                              setIsNewEntry(true);
                              setEditingEducationIndex(newIndex);
                            }}
                            className="color-btn"
                          >
                            Add Education
                          </button>
                        )}
                      </div>
                    )}
                  </FieldArray>
                  <ErrorMessage
                    name="education"
                    component="div"
                    className="form-error"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="resume">Resume (PDF, up to 5MB)*</label>
                  <input
                    ref={fileInputRef}
                    name="resume"
                    type="file"
                    onChange={(event) =>
                      formik.setFieldValue(
                        "resume",
                        event.currentTarget.files[0]
                      )
                    }
                    className="form-input file-input"
                  />
                  <ErrorMessage
                    name="resume"
                    component="div"
                    className="form-error"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message to the Hiring Team</label>
                  <Field
                    as="textarea"
                    name="message"
                    className="form-input"
                    rows="4"
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="form-error"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formik.isSubmitting}
                  className="color-btn mt-8"
                >
                  Submit Application
                </button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
};

export default Apply;
