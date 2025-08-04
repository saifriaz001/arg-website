import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import "../yahya-css/careers.css";
import { jobs } from "../utils/constants";
import { connectCardData } from "../utils/importantConstants"; // For the sidebar cards
import ConnectCard from "../CareerComponents/ConnectCard";

const JobDetail = () => {
  const { slug } = useParams();
  // Find the single job that matches the slug from the URL
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
  const sidebarCards = connectCardData.filter(
    (card) =>
      card.title.includes("disability") || card.title.includes("CONNECT")
  );

  return (
    <div className="job-detail-container">
      {/* <div className="max-w-7xl mx-auto">
        <Link to="/careers" className="back-button">
          &larr; Back to all jobs
        </Link>
      </div> */}

      {/* Job Detail Header */}
      <div className="job-detail-header">
        <div className="job-detail-header-content">
          <div>
            <h1 className="job-detail-title">{job.title}</h1>
            <p className="job-detail-location">
              {job.city}, {job.state}
            </p>
          </div>
          <div className="job-detail-meta">
            <p>
              <strong>Reqid:</strong> {job._id}
            </p>
            <p>
              <strong>Career Area:</strong> {job.careerArea}
            </p>
            <p>
              <strong>Business Line:</strong> {job.businessLine}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="job-detail-main-content">
        <div className="job-detail-description-panel">
          <h3>Job Description</h3>
          <p>{job.description}</p>
          <h3>Qualifications</h3>
          <ul className="qualifications-list">
            {job.qualifications.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
          <h3>What makes ARG a great place to work</h3>
          <p>
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
          <p>
            As an Equal Opportunity Employer, we believe in your potential and
            are here to help you achieve it. All your information will be kept
            confidential according to EEO guidelines.
          </p>

          <div className="job-details-bottom-meta">
            <p>
              <strong>ReqID:</strong> {job._id}
            </p>
            <p>
              <strong>Business Line:</strong> {job.businessLine}
            </p>
            <p>
              <strong>Business Group:</strong> {job.businessGroup}
            </p>
            <p>
              <strong>Strategic Business Unit:</strong>{" "}
              {job.strategicBusinessUnit}
            </p>
            <p>
              <strong>Career Area:</strong> {job.careerArea}
            </p>
            <p>
              <strong>Work Location Model:</strong> {job.workLocationModel}
            </p>
            <p>
              <strong>Legal Entity:</strong> {job.legalEntity}
            </p>
          </div>

          <a
            href={job.googleFormLink}
            target="_blank"
            rel="noopener noreferrer"
            className="color-btn mt-8 w-35"
          >
            <span>Apply Now</span> <FaChevronRight className="right-arrow" />
          </a>
        </div>

        <aside className="job-detail-sidebar">
          <div className="hidden md:flex">
            <a
              href={job.googleFormLink}
              target="_blank"
              rel="noopener noreferrer"
              className="color-btn w-35"
            >
              <span>Apply Now</span> <FaChevronRight className="right-arrow" />
            </a>
          </div>
          {sidebarCards.map((card, index) => (
            <ConnectCard
              key={index}
              title={card.title}
              buttons={card.buttons}
            />
          ))}
        </aside>
      </div>
    </div>
  );
};

export default JobDetail;
