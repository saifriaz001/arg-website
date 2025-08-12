import React from 'react';
import ButtonWithArrow from './ButtonWithArrow';
import { Link } from 'react-router-dom';
import { FiArrowRightCircle } from 'react-icons/fi'; // Icon similar to your screenshot

const CareerCard = () => {
  return (
    <Link
      to="/careers"
      className="page-background p-4 mustard-border border rounded-md shadow hover:shadow-md transition duration-300 block group"
    >
      {/* Title */}
      <h3 className="Project-heading">
        Expand your career with ARG
      </h3>

      {/* Footer row: Read More + Icon */}
      <div >
        <ButtonWithArrow to={"/careers"} />
      </div>

      {/* Optional underline at the bottom */}
      <div className="mt-4 border-t mustard-border w-full"></div>
    </Link>
  );
};

export default CareerCard;
