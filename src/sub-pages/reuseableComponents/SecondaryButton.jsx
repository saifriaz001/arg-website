import React from "react";

const SecondaryButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="secondary-btn"
    >
      {text}
    </button>
  );
};

export default SecondaryButton;
