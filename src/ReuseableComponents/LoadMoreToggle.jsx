// ReuseableComponents/LoadMoreToggle.jsx
import React from "react";

const LoadMoreToggle = ({ visibleCount, totalCount, increment = 5, setVisibleCount }) => {
    const handleClick = () => {
        if (visibleCount >= totalCount) {
            setVisibleCount(increment); // Reset
        } else {
            setVisibleCount((prev) => prev + increment); // Load more
        }
    };

    const buttonText = visibleCount >= totalCount ? "Show Less" : "Load More";

    if (totalCount <= increment) return null; // Don't render if not needed

    return (
        <div className="text-center mt-8">
            <button
                onClick={handleClick}
                className="Load-More"
            >
                {buttonText}
            </button>
        </div>
    );
};

export default LoadMoreToggle;
