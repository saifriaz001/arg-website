import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDropzone } from "react-dropzone";
import {
  applicationValidationSchema,
  experienceSchema,
  educationSchema,
} from "../utils/validationSchemas";
import ExperienceForm from "../CareerComponents/ExperienceForm";
import EducationForm from "../CareerComponents/EducationForm";
import ExperienceDisplay from "../CareerComponents/ExperienceDisplay";
import EducationDisplay from "../CareerComponents/EducationDisplay";
import EditableSection from "../CareerComponents/EditableSection";
import { getJobs } from "../Admin/Endpoints/JobsAPI"; // Fetches jobs from the API
import { postApplication } from "../Admin/Endpoints/JobApplicationsAPI";
import Select from "react-select";

import "../yahya-css/careers.css";

const Apply = () => {
  const [jobs, setJobs] = useState([]); // State to hold the fetched jobs

  // Fetch the list of jobs when the component mounts
  useEffect(() => {
    const fetchJobsForDropdown = async () => {
      try {
        const res = await getJobs();
        setJobs(res || []);
      } catch (error) {
        console.error("Failed to fetch jobs for dropdown:", error);
      }
    };
    fetchJobsForDropdown();
  }, []);

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

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    if (!values.resume) {
      alert("Please select a resume file to upload.");
      setSubmitting(false);
      return;
    }
    const formData = new FormData();
    formData.append("firstName", values.firstName);
    formData.append("lastName", values.lastName);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("jobTitle", values.jobTitle);
    formData.append("message", values.message);
    formData.append("experience", JSON.stringify(values.experience));
    formData.append("education", JSON.stringify(values.education));
    formData.append("resume", values.resume);

    setSubmitting(true);
    try {
      const result = await postApplication(formData);
      console.log("SUCCESS!", result);
      alert("Application submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("SUBMISSION FAILED:", error);
      alert(
        "There was an error submitting your application. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  };

  const jobOptions = jobs.map((job) => ({
    value: job.title,
    label: job.title,
  }));

  const customSelectStyles = {
    control: (provided) => ({
      ...provided,
      borderRadius: "0.375rem",
      padding: "0.3rem",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#2563eb"
        : state.isFocused
        ? "#eff6ff"
        : "white",
      color: state.isSelected ? "white" : "black",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#6b7280",
    }),
  };

  const ResumeDropzone = ({ formik }) => {
    const onDrop = (acceptedFiles) => {
      // When a file is dropped, we take the first one and set it in Formik's state.
      if (acceptedFiles && acceptedFiles.length > 0) {
        formik.setFieldValue("resume", acceptedFiles[0]);
      }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
      onDrop,
      multiple: false, // Ensures only one file can be uploaded
      accept: { "application/pdf": [".pdf"] }, // Accepts only PDF files
      maxSize: 5 * 1024 * 1024, // 5MB size limit
    });
    return (
      <div className="form-group">
        <label htmlFor="resume">Resume (PDF, up to 5MB)*</label>
        {/* getRootProps applies all necessary event handlers for drag-and-drop */}
        <div
          {...getRootProps()}
          className={`dropzone ${isDragActive ? "dropzone-active" : ""}`}
        >
          {/* getInputProps applies necessary attributes to the hidden file input */}
          <input {...getInputProps()} name="resume" />
          {isDragActive ? (
            <p>Drop the resume here ...</p>
          ) : (
            <p>Drag & drop your resume here, or click to select a file</p>
          )}
        </div>
        {/* Display the selected file name for user feedback */}
        {formik.values.resume && (
          <p className="file-name-display">
            Selected file: {formik.values.resume.name}
          </p>
        )}
        <ErrorMessage name="resume" component="div" className="form-error" />
      </div>
    );
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
          {(formik) => (
            <Form className="form-container">
              <ResumeDropzone formik={formik} />
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="firstName">First Name*</label>
                  <Field
                    name="firstName"
                    type="text"
                    className="form-input"
                    placeholder="Enter your first name"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="form-error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name*</label>
                  <Field
                    name="lastName"
                    type="text"
                    className="form-input"
                    placeholder="Enter your last name"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="form-error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email*</label>
                  <Field
                    name="email"
                    type="email"
                    className="form-input"
                    placeholder="Enter your email"
                  />
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
                    placeholder="Confirm your email"
                  />
                  <ErrorMessage
                    name="confirmEmail"
                    component="div"
                    className="form-error"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone*</label>
                  <Field
                    name="phone"
                    type="tel"
                    className="form-input"
                    placeholder="Enter your 10 digit phone number"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="form-error"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="jobTitle">Job Title*</label>
                <Select
                  id="jobTitle"
                  name="jobTitle"
                  options={jobOptions}
                  styles={customSelectStyles}
                  classNamePrefix="react-select"
                  placeholder="Select a job title"
                  // Find the selected option object based on Formik's value
                  value={jobOptions.find(
                    (option) => option.value === formik.values.jobTitle
                  )}
                  // Update Formik's state when a new option is selected
                  onChange={(option) =>
                    formik.setFieldValue("jobTitle", option ? option.value : "")
                  }
                  // Tell Formik that the field has been touched for validation
                  onBlur={() => formik.setFieldTouched("jobTitle", true)}
                />
                <ErrorMessage
                  name="jobTitle"
                  component="div"
                  className="form-error"
                />
              </div>

              <EditableSection
                fieldName="experience"
                sectionTitle="Experience"
                formik={formik}
                validationSchema={experienceSchema}
                DisplayComponent={ExperienceDisplay}
                FormComponent={ExperienceForm}
                newEntry={{
                  title: "",
                  company: "",
                  location: "",
                  description: "",
                  startDate: "",
                  endDate: "",
                  currentlyWorkHere: false,
                }}
              />

              <EditableSection
                fieldName="education"
                sectionTitle="Education"
                formik={formik}
                validationSchema={educationSchema}
                DisplayComponent={EducationDisplay}
                FormComponent={EducationForm}
                newEntry={{
                  institution: "",
                  course: "",
                  branch: "",
                  schoolLocation: "",
                  description: "",
                }}
              />

              {/* <div className="form-group">
                <label htmlFor="resume">Resume (PDF, up to 5MB)*</label>
                <input
                  ref={fileInputRef}
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
              </div> */}

              <div className="form-group">
                <label htmlFor="message">Message to the Hiring Team</label>
                <Field
                  as="textarea"
                  name="message"
                  className="form-input"
                  rows="4"
                  placeholder="Optional"
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
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Apply;
