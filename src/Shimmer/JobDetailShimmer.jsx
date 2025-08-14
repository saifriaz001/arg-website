import React from "react";
import "../yahya-css/careers.css";

const JobDetailShimmer = () => (
  <div className="animate-pulse bg-gray-100 min-h-screen">
    {/* Header Section Shimmer */}
    <div className="bg-gray-400 p-8 py-20 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="h-10 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="h-6 bg-gray-300 rounded w-1/4"></div>
      </div>
    </div>

    {/* Main Content Section Shimmer */}
    <div className="p-4 sm:p-8 md:p-12">
      <div className="max-w-7xl  bg-white p-6 sm:p-8 rounded-lg shadow-lg -mt-20">
        {/* Job Description Shimmer */}
        <div className="h-7 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6 mb-6"></div>

        {/* Qualifications Shimmer */}
        <div className="h-7 bg-gray-200 rounded w-1/4 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-6"></div>

        {/* Minimum Requirements Shimmer */}
        <div className="h-7 bg-gray-200 rounded w-2/5 mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3 mb-6"></div>

        {/* What makes ARG great... Shimmer */}
        <div className="h-7 bg-gray-200 rounded w-1/2 mb-4"></div>
        <div className="space-y-2">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>

        {/* Bottom Meta Shimmer */}
        <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
          <div className="h-5 bg-gray-200 rounded w-1/3"></div>
        </div>

        {/* Apply Button Shimmer */}
        <div className="mt-8">
          <div className="h-12 bg-gray-200 rounded w-32"></div>
        </div>
      </div>
    </div>
  </div>
);

export default JobDetailShimmer;
