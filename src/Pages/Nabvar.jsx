import React, { useState } from 'react';
import logo from "../assets/VnV75nn2kwi-8aQt2CFF2 (1).svg"
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img className="h-10 w-auto" src={logo} alt="ARG Logo" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-gray-800 font-medium hover:text-orange-600">Home</Link>
            <Link to="/services" className="text-gray-800 font-medium hover:text-orange-600">Services</Link>
            <Link to="/projects" className="text-gray-800 font-medium hover:text-orange-600">Projects</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link to="/" className="block text-gray-800 font-medium hover:text-orange-600">Home</Link>
          <Link to="/services" className="block text-gray-800 font-medium hover:text-orange-600">Services</Link>
          <Link to="/projects" className="block text-gray-800 font-medium hover:text-orange-600">Projects</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
