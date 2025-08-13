import React, { useState, useEffect } from "react";
import CreateJobForm from "../DashboardComponents/CreateJobForm";
import JobTable from "../DashboardComponents/JobTable";
import { getJobs } from "../../Endpoints/JobsAPI";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await getJobs();
      const jobsArray = res || [];

      if (Array.isArray(jobsArray)) {
        const sortedJobs = jobsArray.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setJobs(sortedJobs);
      } else {
        console.error(
          "Error: The data received from getJobs() is not an array.",
          jobsArray
        );
        setJobs([]); // Set to empty array to prevent table errors
      }
    } catch (err) {
      console.error("❌ Failed to fetch jobs:", err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div className="space-y-8 p-4 md:p-6">
      <CreateJobForm onJobCreated={fetchJobs} />
      <JobTable jobsData={jobs} onDataRefresh={fetchJobs} />   {" "}
    </div>
  );
};

export default Jobs;
