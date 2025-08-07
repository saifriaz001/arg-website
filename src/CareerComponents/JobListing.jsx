import React from "react";
import JobCard from "./JobCard";
import { FaChevronRight } from "react-icons/fa";

const JobListing = ({ jobs, visibleCount, onLoadMore, onShowLess }) => (
  <main className="jobs-listing-panel order-1 md:order-none">
    <div className="jobs-header">
      <h2 className="jobs-count">{jobs.length} Jobs</h2>
    </div>
    <div className="job-list">
      {jobs.slice(0, visibleCount).map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
    {visibleCount < jobs.length ? (
      <div className="load-more-container">
        <button onClick={onLoadMore} className="color-btn ">
          <span className="">Load More</span>
          <FaChevronRight className="right-arrow" />
        </button>
      </div>
    ) : (
      <div className="load-more-container">
        <button onClick={onShowLess} className="color-btn ">
          <span className="">Show Less</span>
          <FaChevronRight className="right-arrow" />
        </button>
      </div>
    )}
  </main>
);

export default JobListing;
