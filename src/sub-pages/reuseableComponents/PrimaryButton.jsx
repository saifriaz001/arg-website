import React from "react";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="primary-btn"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
