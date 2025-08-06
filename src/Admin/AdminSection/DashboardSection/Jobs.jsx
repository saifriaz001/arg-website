/*
================================================================================
File: /pages/Jobs.jsx (The Parent Page)
- This component manages the state for the list of jobs.
- It fetches the data and passes it down to the form and table.
================================================================================
*/
import React, { useState, useEffect } from "react";
import CreateJobForm from "../DashboardComponents/CreateJobForm"; // Adjust path if needed
import JobTable from "../DashboardComponents/JobTable"; // Adjust path if needed
import { getJobs } from "../../Endpoints/JobsAPI"; // Adjust path if needed

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  const fetchJobs = async () => {
    try {
      const res = await getJobs();
      // DEBUG: Log the entire raw response from the API
      console.log("1. API Response:", res);

      // --- FIX APPLIED HERE ---
      // The log shows that `res` is the array itself, not an object
      // containing a `data` property. We now correctly reference `res`.
      const jobsArray = res || [];

      // DEBUG: Log the array you are trying to put into state
      console.log("2. Extracted Jobs Array:", jobsArray);

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
