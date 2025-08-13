import React from "react";
import ReusableTanTable from "../../ReuseableComponents/ReusableTanTable"; // Adjust path as needed

const ApplicantTable = ({ applicantsData, onViewDetails, onDelete }) => {
  const columns = [
    {
      header: "Applicant Name",
      cell: ({ row }) => (
        <div className="font-semibold">
          {`${row.original.firstName} ${row.original.lastName}`}
        </div>
      ),
    },
    {
      accessorKey: "jobTitle",
      header: "Applied For",
    },
    {
      header: "Contact",
      cell: ({ row }) => (
        <div>
          <p className="text-sm text-gray-700">{row.original.email}</p>
          <p className="text-xs text-gray-500">{row.original.phone}</p>
        </div>
      ),
    },
    {
      accessorKey: "createdAt",
      header: "Submitted On",
      cell: ({ row }) =>
        new Date(row.original.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }),
    },
    {
      header: "Resume",
      cell: ({ row }) => (
        <a
          href={row.original.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          // FIX: Updated button styling for a cleaner look
          className="inline-block px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
        >
          View / Download
        </a>
      ),
    },
    {
      header: "Actions",
      cell: ({ row }) => (
        <div className="flex space-x-2">
          <button
            onClick={() => onViewDetails(row.original)}
            // FIX: Updated button styling for better visibility
            className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
          >
            View Details
          </button>
          <button
            onClick={() => onDelete(row.original._id)}
            // FIX: Updated button styling for consistency
            className="px-3 py-1.5 text-xs font-medium text-white bg-red-600 rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors"
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-gray-800">All Applicants</h2>
      <ReusableTanTable columns={columns} data={applicantsData || []} />
    </div>
  );
};

export default ApplicantTable;
