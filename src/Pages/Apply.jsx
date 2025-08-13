// import React, { useRef } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
// import { jobs } from "../utils/constants";
// import {
//   applicationValidationSchema,
//   experienceSchema,
//   educationSchema,
// } from "../utils/validationSchemas";
// import { getJobs } from "../Admin/Endpoints/JobsAPI";
// import ExperienceForm from "../CareerComponents/ExperienceForm";
// import EducationForm from "../CareerComponents/EducationForm";
// import ExperienceDisplay from "../CareerComponents/ExperienceDisplay";
// import EducationDisplay from "../CareerComponents/EducationDisplay";
// import EditableSection from "../CareerComponents/EditableSection";
// import "../yahya-css/careers.css";

// import { postApplication } from "../Admin/Endpoints/JobApplicationsAPI";

// const Apply = () => {
//   const fileInputRef = useRef(null);

//   const initialValues = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     confirmEmail: "",
//     phone: "",
//     jobTitle: "",
//     resume: null,
//     message: "",
//     experience: [],
//     education: [],
//   };

//   const handleSubmit = async (values, { setSubmitting, resetForm }) => {
//     if (!values.resume) {
//       alert("Please select a resume file to upload.");
//       setSubmitting(false);
//       return;
//     }
//     const formData = new FormData();
//     formData.append("firstName", values.firstName);
//     formData.append("lastName", values.lastName);
//     formData.append("email", values.email);
//     formData.append("phone", values.phone);
//     formData.append("jobTitle", values.jobTitle);
//     formData.append("message", values.message);

//     formData.append("experience", JSON.stringify(values.experience));
//     formData.append("education", JSON.stringify(values.education));

//     formData.append("resume", values.resume);

//     console.log("--- Inspecting FormData before sending ---");
//     for (let [key, value] of formData.entries()) {
//       console.log(key, value);
//     }

//     setSubmitting(true);
//     try {
//       // This sends the data to your backend
//       const result = await postApplication(formData);

//       // Handle success
//       console.log("SUCCESS!", result);
//       alert("Application submitted successfully!"); // Replace with a better notification later
//       resetForm();
//     } catch (error) {
//       // Handle errors from the backend
//       console.error("SUBMISSION FAILED:", error);
//       alert(
//         "There was an error submitting your application. Please try again."
//       );
//     } finally {
//       // This runs whether it succeeded or failed
//       setSubmitting(false);
//     }
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   return (
//     <div className="apply-container mt-5 md:mt-10">
//       <div className="page-section">
//         <h1 className="page-title">Apply for a Job</h1>
//         <p className="page-subtitle">We're excited to hear from you!</p>

//         <Formik
//           initialValues={initialValues}
//           validationSchema={applicationValidationSchema}
//           onSubmit={handleSubmit}
//         >
//           {(formik) => (
//             <Form className="form-container">
//               <div className="form-grid">
//                 <div className="form-group">
//                   <label htmlFor="firstName">First Name*</label>
//                   <Field name="firstName" type="text" className="form-input" />
//                   <ErrorMessage
//                     name="firstName"
//                     component="div"
//                     className="form-error"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="lastName">Last Name*</label>
//                   <Field name="lastName" type="text" className="form-input" />
//                   <ErrorMessage
//                     name="lastName"
//                     component="div"
//                     className="form-error"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="email">Email*</label>
//                   <Field name="email" type="email" className="form-input" />
//                   <ErrorMessage
//                     name="email"
//                     component="div"
//                     className="form-error"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="confirmEmail">Confirm Email*</label>
//                   <Field
//                     name="confirmEmail"
//                     type="email"
//                     className="form-input"
//                   />
//                   <ErrorMessage
//                     name="confirmEmail"
//                     component="div"
//                     className="form-error"
//                   />
//                 </div>
//                 <div className="form-group">
//                   <label htmlFor="phone">Phone*</label>
//                   <Field name="phone" type="tel" className="form-input" />
//                   <ErrorMessage
//                     name="phone"
//                     component="div"
//                     className="form-error"
//                   />
//                 </div>
//               </div>

//               <div className="form-group">
//                 <label htmlFor="jobTitle">Job Title*</label>
//                 <Field as="select" name="jobTitle" className="form-input">
//                   <option value="">Select a job title</option>
//                   {jobs.map((job) => (
//                     <option key={job._id} value={job.title}>
//                       {job.title}
//                     </option>
//                   ))}
//                 </Field>
//                 <ErrorMessage
//                   name="jobTitle"
//                   component="div"
//                   className="form-error"
//                 />
//               </div>

//               <EditableSection
//                 fieldName="experience"
//                 sectionTitle="Experience"
//                 formik={formik}
//                 validationSchema={experienceSchema}
//                 DisplayComponent={ExperienceDisplay}
//                 FormComponent={ExperienceForm}
//                 newEntry={{
//                   title: "",
//                   company: "",
//                   location: "",
//                   description: "",
//                   startDate: "",
//                   endDate: "",
//                   currentlyWorkHere: false,
//                 }}
//               />

//               <EditableSection
//                 fieldName="education"
//                 sectionTitle="Education"
//                 formik={formik}
//                 validationSchema={educationSchema}
//                 DisplayComponent={EducationDisplay}
//                 FormComponent={EducationForm}
//                 newEntry={{
//                   institution: "",
//                   major: "",
//                   degree: "",
//                   schoolLocation: "",
//                   description: "",
//                 }}
//               />

//               <div className="form-group">
//                 <label htmlFor="resume">Resume (PDF, up to 5MB)*</label>
//                 <input
//                   ref={fileInputRef}
//                   name="resume"
//                   type="file"
//                   onChange={(event) =>
//                     formik.setFieldValue("resume", event.currentTarget.files[0])
//                   }
//                   className="form-input file-input"
//                 />
//                 <ErrorMessage
//                   name="resume"
//                   component="div"
//                   className="form-error"
//                 />
//               </div>

//               <div className="form-group">
//                 <label htmlFor="message">Message to the Hiring Team</label>
//                 <Field
//                   as="textarea"
//                   name="message"
//                   className="form-input"
//                   rows="4"
//                 />
//                 <ErrorMessage
//                   name="message"
//                   component="div"
//                   className="form-error"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={formik.isSubmitting}
//                 className="color-btn mt-8"
//               >
//                 Submit Application
//               </button>
//             </Form>
//           )}
//         </Formik>
//       </div>
//     </div>
//   );
// };

// export default Apply;
import React, { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
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

import "../yahya-css/careers.css";

const Apply = () => {
  const fileInputRef = useRef(null);
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
          {(formik) => (
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
                  {/* Now mapping over the fetched jobs state */}
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

              <div className="form-group">
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
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Apply;
