import React, { useState } from "react";
import JobCard from "./JobCard";
import LoadMoreToggle from "../ReuseableComponents/LoadMoreToggle";
const JOBS_PER_PAGE = 5;

const JobListing = ({ jobs }) => {
  const [visibleCount, setVisibleCount] = useState(JOBS_PER_PAGE);

  return (
    <main className="jobs-listing-panel order-1 md:order-none">
      <div className="jobs-header">
        <h2 className="jobs-count">{jobs.length} Jobs</h2>
      </div>
      <div className="job-list">
        {jobs.slice(0, visibleCount).map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div>

      <LoadMoreToggle
        visibleCount={visibleCount}
        totalCount={jobs.length}
        increment={4}
        setVisibleCount={setVisibleCount}
      />
    </main>
  );
};

export default JobListing;
