import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  // Don't show pagination if there's only one page or no pages
  if (totalPages <= 1) {
    return null;
  }

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-6 py-8 text-lg">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-2xl text-[var(--color-accent)]"
        aria-label="Go to previous page"
      >
        <FaChevronLeft />
      </button>

      <span className="font-medium text-[var(--color-text-secondary)]">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed text-2xl text-[var(--color-accent)]"
        aria-label="Go to next page"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default Pagination;
