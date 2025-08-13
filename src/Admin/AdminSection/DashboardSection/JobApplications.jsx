import React, { useState, useEffect } from "react";
import ApplicantTable from "../DashboardComponents/ApplicantTable";
import ApplicantDetailsModal from "../DashboardComponents/ApplicantDetailsModal";
import {
  getJobApplications,
  deleteApplication,
} from "../../Endpoints/JobApplicationsAPI";
import { getJobs } from "../../Endpoints/JobsAPI"; // Import the function to get jobs
import { FiRefreshCw } from "react-icons/fi";

const JobApplications = () => {
  const [applicants, setApplicants] = useState([]);
  const [jobs, setJobs] = useState([]); // State to hold the list of jobs for the filter
  const [loading, setLoading] = useState(true);
  const [selectedApplicant, setSelectedApplicant] = useState(null);
  const [token, setToken] = useState(null);
  const [selectedJob, setSelectedJob] = useState("All"); // State for the filter dropdown

  // Fetch the token on component mount
  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    } else {
      console.error("No authentication token found. User is not logged in.");
      setLoading(false);
    }
  }, []);

  // Function to fetch applicants
  const fetchApplicants = async (authToken) => {
    if (!authToken) return;
    setLoading(true);
    try {
      const response = await getJobApplications(authToken);
      // FIX: The response is the array itself, not nested in a .data property.
      const applicantsArray = response || [];
      if (Array.isArray(applicantsArray)) {
        const sortedApplicants = applicantsArray.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setApplicants(sortedApplicants);
      } else {
        console.error(
          "Error: Applicant data is not an array.",
          applicantsArray
        );
        setApplicants([]);
      }
    } catch (error) {
      console.error("❌ Failed to fetch applicants:", error);
    } finally {
      setLoading(false);
    }
  };

  // Function to fetch the list of jobs for the filter dropdown
  const fetchJobsForFilter = async () => {
    try {
      const res = await getJobs();
      // FIX: The response is the array itself, not nested in a .data property.
      setJobs(res || []);
    } catch (error) {
      console.error("Failed to fetch jobs for filter:", error);
    }
  };

  // Fetch both applicants and jobs when the token is available
  useEffect(() => {
    if (token) {
      fetchApplicants(token);
      fetchJobsForFilter();
    }
  }, [token]);

  // Handlers for modal and delete actions
  const handleViewDetails = (applicant) => setSelectedApplicant(applicant);
  const handleCloseModal = () => setSelectedApplicant(null);
  const handleDelete = async (id) => {
    if (!token) return alert("You must be logged in.");
    if (window.confirm("Are you sure you want to delete this application?")) {
      try {
        await deleteApplication(id, token);
        fetchApplicants(token);
      } catch (err) {
        console.error("❌ Failed to delete application:", err);
        alert("❌ Failed to delete application.");
      }
    }
  };

  // Filter the applicants based on the selected job title
  const filteredApplicants = applicants.filter((applicant) => {
    if (selectedJob === "All") {
      return true;
    }
    return applicant.jobTitle === selectedJob;
  });

  if (loading && !applicants.length) {
    return <div className="p-6">Loading applications...</div>;
  }

  return (
    <div className="p-4 md:p-8">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6 gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Job Applications</h1>
        <div className="flex items-center gap-4">
          {/* Job Filter Dropdown */}
          <div>
            <select
              id="jobFilter"
              value={selectedJob}
              onChange={(e) => setSelectedJob(e.target.value)}
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
            >
              <option value="All">Filter by: All Jobs</option>
              {jobs.map((job) => (
                <option key={job._id} value={job.title}>
                  {job.title}
                </option>
              ))}
            </select>
          </div>
          <button
            onClick={() => fetchApplicants(token)}
            disabled={loading}
            className="flex items-center px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:bg-gray-400 focus:outline-none"
          >
            <FiRefreshCw
              className={`h-5 w-5 mr-2 ${loading ? "animate-spin" : ""}`}
            />
            {loading ? "Refreshing..." : "Refresh"}
          </button>
        </div>
      </div>

      {token ? (
        // Conditionally render the table or a "no results" message
        filteredApplicants.length > 0 ? (
          <ApplicantTable
            applicantsData={filteredApplicants}
            onViewDetails={handleViewDetails}
            onDelete={handleDelete}
          />
        ) : (
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-gray-700">
              No Applicants Found
            </h3>
            <p className="text-gray-500 mt-2">
              There are no applications matching the selected job title.
            </p>
          </div>
        )
      ) : (
        <div className="p-6 bg-yellow-100 text-yellow-800 rounded-lg">
          Please log in to view applications.
        </div>
      )}

      <ApplicantDetailsModal
        applicant={selectedApplicant}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default JobApplications;
