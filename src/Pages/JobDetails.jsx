import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "../yahya-css/careers.css";
import { jobs } from "../utils/constants";
import { getJobs } from "../Admin/Endpoints/JobsAPI";

import { useEffect, useState } from "react";
import ButtonWithArrow from "../ReuseableComponents/ButtonWithArrow";

const JobDetail = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchAndSetJobs = async () => {
      try {
        const jobsFromAPI = await getJobs();
        if (Array.isArray(jobsFromAPI)) {
          setJobs(jobsFromAPI);
        } else {
          console.error("Fetched data is not an array:", jobsFromAPI);
        }
      } catch (error) {
        console.error("❌ Failed to fetch jobs:", error);
      }
    };
    fetchAndSetJobs();
  }, []);

  const { slug } = useParams();
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return (
      <div className="job-detail-container p-8">
        <h1 className="text-3xl font-bold">Job not found</h1>
        <Link to="/careers" className="back-button mt-4">
          &larr; Back to all jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="job-detail-container">
      {/* Header Section */}
      <div className="job-detail-header">
        <div className="page-section">
          <h1 className="page-title">{job.title}</h1>
          <p className="page-subtitle">
            {job.city}, {job.state}
          </p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="page-section">
        <div className="content-panel">
          <h3 className="section-heading">Job Description</h3>
          <p className="paragraph">{job.description}</p>
          <h3 className="section-heading">Qualifications</h3>
          <ul className="qualifications-list">
            {job.qualifications.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>

          <h3 className="section-heading">Minimum Requirements</h3>
          <ul className="qualifications-list">
            {job.minRequirements.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>

          <h3 className="section-heading">
            What makes ARG a great place to work
          </h3>
          <p className="paragraph">
            You will be part of a global team that champions your growth and
            career ambitions. Work on groundbreaking projects - both in your
            local community and on a global scale - that are transforming our
            industry and shaping the future. With cutting-edge technology and a
            network of experts, you’ll have the resources to make a real impact.
            Our award-winning training and development programs are designed to
            expand your technical expertise and leadership skills, helping you
            build the career you’ve always envisioned. Here, you’ll find a
            welcoming workplace built on respect, collaboration and
            community—where you have the freedom to grow in a world of
            opportunity.
          </p>
          <p className="paragraph">
            As an Equal Opportunity Employer, we believe in your potential and
            are here to help you achieve it. All your information will be kept
            confidential according to EEO guidelines.
          </p>

          <div className="job-details-bottom-meta">
            <p>
              <strong>Business Line:</strong> {job.businessLine}
            </p>
            <p>
              <strong>Career Area:</strong> {job.careerArea}
            </p>
            <p>
              <strong>Work Location Model:</strong> {job.workLocation}
            </p>
          </div>

          <div className="mt-5">
            {/* <a
              href={job.applyFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="color-btn"
            >
              <span>Apply Now</span> <FaChevronRight className="right-arrow" />
            </a> */}
            <ButtonWithArrow to={"/careers/apply"} label="Apply Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
