import React from "react";

const ApplicantDetailsModal = ({ applicant, onClose }) => {
  // If no applicant is selected, don't render anything
  if (!applicant) {
    return null;
  }

  return (
    // Modal Overlay
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
      {/* Modal Content */}
      <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 w-11/12 md:w-3/4 lg:w-1/2 max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-bold text-gray-800">
            {applicant.firstName} {applicant.lastName}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Basic Info */}
          <div>
            <h3 className="font-semibold text-lg mb-2 border-b">
              Applicant Information
            </h3>
            <p>
              <strong>Applied for:</strong> {applicant.jobTitle}
            </p>
            <p>
              <strong>Email:</strong> {applicant.email}
            </p>
            <p>
              <strong>Phone:</strong> {applicant.phone}
            </p>
            <p>
              <strong>Submitted:</strong>{" "}
              {new Date(applicant.submittedAt).toLocaleString()}
            </p>
            {applicant.message && (
              <p className="mt-2">
                <strong>Message:</strong>{" "}
                <span className="text-gray-600 italic">
                  "{applicant.message}"
                </span>
              </p>
            )}
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2 border-b">Experience</h3>
            {applicant.experience && applicant.experience.length > 0 ? (
              applicant.experience.map((exp) => (
                <div
                  key={exp.id || exp._id}
                  className="mb-3 p-3 bg-gray-50 rounded"
                >
                  <p className="font-bold">
                    {exp.title} at {exp.company}
                  </p>
                  <p className="text-sm text-gray-600">
                    {exp.startDate} -{" "}
                    {exp.currentlyWorkHere ? "Present" : exp.endDate}
                  </p>
                  <p className="text-sm mt-1">{exp.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No experience provided.</p>
            )}
          </div>

          {/* Education Section */}
          <div>
            <h3 className="font-semibold text-lg mb-2 border-b">Education</h3>
            {applicant.education && applicant.education.length > 0 ? (
              applicant.education.map((edu) => (
                <div
                  key={edu.id || edu._id}
                  className="mb-3 p-3 bg-gray-50 rounded"
                >
                  <p className="font-bold">{edu.institution}</p>
                  <p className="text-sm text-gray-600">
                    {edu.course} in {edu.branch}
                  </p>
                  <p className="text-sm mt-1">{edu.description}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No education provided.</p>
            )}
          </div>
        </div>

        <div className="border-t mt-6 pt-4 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDetailsModal;
