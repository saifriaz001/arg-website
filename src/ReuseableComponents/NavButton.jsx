import React from 'react';

const NavButton = ({ children, className = '', ...props }) => {
  return (
    <button
      className="btn-nav"
      {...props}
    >
      {children}
    </button>
  );
};

export default NavButton;
