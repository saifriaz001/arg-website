import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { jobs } from "../utils/constants";
import ExperienceForm from "../CareerComponents/ExperienceForm";
import EducationForm from "../CareerComponents/EducationForm";
import CountryCodeDropdown from "../CareerComponents/CountryCodeDropdown"; // --- NEW: Import custom dropdown
import "../yahya-css/careers.css";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref("email"), null], "Emails must match")
    .required("Please confirm your email"),
  countryCode: Yup.string().required("Country code is required"),
  phone: Yup.string().required("Phone number is required"),
  jobTitle: Yup.string().required("Please select a job title"),
  resume: Yup.mixed()
    .required("A resume is required")
    .test(
      "fileSize",
      "File is too large",
      (value) => value && value.size <= 5 * 1024 * 1024
    )
    .test(
      "fileType",
      "Unsupported file format",
      (value) => value && value.type === "application/pdf"
    ),
  message: Yup.string(),
  experience: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Title is required"),
      company: Yup.string(),
      location: Yup.string(),
      description: Yup.string(),
      startDate: Yup.date().required("Start date is required"),
      endDate: Yup.date().when("currentlyWorkHere", {
        is: false,
        then: (schema) => schema.required("End date is required"),
        otherwise: (schema) => schema.nullable(),
      }),
      currentlyWorkHere: Yup.boolean(),
    })
  ),
  education: Yup.array().of(
    Yup.object().shape({
      institution: Yup.string().required("Institution is required"),
      major: Yup.string(),
      degree: Yup.string(),
      schoolLocation: Yup.string(),
      description: Yup.string(),
    })
  ),
});

const Apply = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    confirmEmail: "",
    countryCode: "",
    phone: "",
    jobTitle: "",
    resume: null,
    message: "",
    experience: [],
    education: [],
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Data:", values);
    alert("Application submitted! Check the console for the form data.");
    setSubmitting(false);
  };

  return (
    <div className="apply-container">
      <div className="page-section">
        <h1 className="page-title">Apply for a Job</h1>
        <p className="page-subtitle">We're excited to hear from you!</p>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(
            formik // Changed to get the full formik instance
          ) => (
            <Form className="form-container">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">First Name*</label>
                  <Field name="firstName" type="text" className="form-input" />
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
                <div className="form-group phone-group">
                  {/* --- UPDATED: Using the new custom dropdown --- */}
                  <CountryCodeDropdown formik={formik} />
                  <div className="w-2/3">
                    <label htmlFor="phone">Phone*</label>
                    <Field name="phone" type="tel" className="form-input" />
                  </div>
                </div>
                <ErrorMessage
                  name="countryCode"
                  component="div"
                  className="form-error"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="form-error"
                />
              </div>

              <div className="form-group">
                <label htmlFor="jobTitle">Job Title*</label>
                <Field as="select" name="jobTitle" className="form-input">
                  <option value="">Select a job title</option>
                  {jobs.map((job) => (
                    <option key={job._id} value={job.title}>
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

              <div className="form-group">
                <label htmlFor="resume">Resume (PDF, up to 5MB)*</label>
                <input
                  name="resume"
                  type="file"
                  onChange={(event) =>
                    formik.setFieldValue("resume", event.currentTarget.files[0])
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

              <FieldArray name="experience" component={ExperienceForm} />
              <FieldArray name="education" component={EducationForm} />

              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="color-btn mt-8"
              >
                Submit Application
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Apply;
