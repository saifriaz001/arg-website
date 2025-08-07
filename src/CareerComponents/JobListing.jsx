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

    {jobs.length > 0 && (
      <div className="load-more-container">
        {visibleCount >= jobs.length ? (
          <button onClick={onShowLess} className="color-btn">
            <span>Show Less</span>
            <FaChevronRight className="right-arrow" />
          </button>
        ) : (
          <button onClick={onLoadMore} className="color-btn">
            <span>Load More</span>
            <FaChevronRight className="right-arrow" />
          </button>
        )}
      </div>
    )}
  </main>
);

export default JobListing;
