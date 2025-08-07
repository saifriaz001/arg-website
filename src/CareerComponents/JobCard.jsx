import React from "react";
import { Link, useParams } from "react-router";
const JobCard = ({ job }) => {
  // const { slug } = useParams();

  return (
    <Link to={`/careers/${job.slug}`}>
      <div
        className="job-card"
        onClick={() => {
          console.log(job.slug);
        }}
      >
        <h3 className="job-card-title">{job.title}</h3>
        <p className="job-card-location">
          {job.city}, {job.state || job.country}
        </p>
        <p className="job-card-details">
          Career Area: <strong>{job.careerArea}</strong>
        </p>
        <p className="job-card-details">
          Business Line: <strong>{job.businessLine}</strong>
        </p>
      </div>
    </Link>
  );
};
export default JobCard;
