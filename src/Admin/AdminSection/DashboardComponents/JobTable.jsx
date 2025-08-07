/*
================================================================================
File: /DashboardComponents/JobTable.jsx
- This component displays the list of jobs.
- It receives its data and refresh function as props.
================================================================================
*/
import React from "react";
import ReusableTanTable from "../../ReuseableComponents/ReusableTanTable"; // Adjust path if needed
import { deleteJobs } from "../../Endpoints/JobsAPI"; // Adjust path if needed

const JobTable = ({ jobsData, onDataRefresh }) => {
  // DEBUG: Log the props being received by the table to ensure data is arriving.
  console.log("3. Data received in JobTable props:", jobsData);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this job?")) return;
    try {
      await deleteJobs(id);
      onDataRefresh();
    } catch (err) {
      console.error("❌ Failed to delete job:", err);
      alert("❌ Failed to delete job.");
    }
  };

  // --- POTENTIAL FIX IS HERE ---
  // Check your data object properties against these accessorKey strings.
  // They must match exactly, including capitalization.
  const columns = [
    {
      accessorKey: "title",
      header: "Job Title",
      cell: ({ row }) => (
        <div className="font-semibold">{row.original.title}</div>
      ),
    },
    {
      header: "Location",
      cell: ({ row }) => `${row.original.city}, ${row.original.state}`,
    },
    {
      accessorKey: "careerArea",
      header: "Career Area",
    },
    {
      accessorKey: "workLocation",
      header: "Work Style",
      cell: ({ row }) => (
        <span
          className={`px-2 py-1 text-xs font-medium rounded-full ${
            row.original.workLocation === "On-site"
              ? "bg-blue-100 text-blue-800"
              : row.original.workLocation === "Remote"
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {row.original.workLocation}{" "}
        </span>
      ),
    },
    {
      accessorKey: "description",
      header: "Description",
      cell: (info) => <p className="max-w-xs truncate">{info.getValue()}</p>,
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <button
          onClick={() => handleDelete(row.original._id)}
          className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Delete{" "}
        </button>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Job List</h2>
      <ReusableTanTable columns={columns} data={jobsData || []} />{" "}
    </div>
  );
};

export default JobTable;
