import React from 'react';
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand/Intro */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-2">AECS Research Global</h3>
          <p className="text-sm text-gray-400">
            Delivering excellence in architecture, engineering, project management and strategic advisory.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/services" className="hover:text-white">Services</a></li>
            <li><a href="/projects" className="hover:text-white">Projects</a></li>
            <li><a href="/about" className="hover:text-white">About Us</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Contact Us</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-yellow-400" />
              <span>2Pocket No. 2, Plot No. 66, 3rd Floor, Jasola Vihar, New Delhi – 110 025</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-yellow-400" />
              <span>+91 9873198259</span>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-400" />
              <span>contact@arg-in.com</span>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Follow Us</h4>
          <div className="flex gap-4 text-xl">
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white">
              <FaLinkedin />
            </a>
            {/* Add other icons like Twitter, Instagram if needed */}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} AECS Research Global. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
