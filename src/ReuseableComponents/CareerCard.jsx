import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi'; // Icon similar to your screenshot

const CareerCard = () => {
  return (
    <Link
      to="/careers"
      className="bg-gray-100 p-6 rounded-md shadow hover:shadow-md transition duration-300 block group"
    >
      {/* Title */}
      <h3 className="Project-heading">
        Expand your career with <span className="text-black">ARG</span>
      </h3>

      {/* Footer row: Read More + Icon */}
      <div className="flex items-center justify-between">
        <span className="text-red-600 font-medium group-hover:underline">Read More</span>
        <FiArrowRightCircle className="text-red-600 text-2xl group-hover:translate-x-1 transition duration-200" />
      </div>

      {/* Optional underline at the bottom */}
      <div className="mt-4 border-t border-gray-300 w-full"></div>
    </Link>
  );
};

export default CareerCard;
