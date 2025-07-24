// components/NewsSideBar.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const NewsSideBar = ({ contacts }) => {
  return (
    <aside className="sidebar">
      <div>
        <h3 className="sidebar-heading">Media contacts</h3>
        <ul className="sidebar-list">
          {contacts.map((c, i) => (
            <li key={i}>
              <span className="sidebar-link">{c.name}</span>, {c.region}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-2">AECOM fact sheet</h4>
        <button className="download-button">
          Download <span className="text-xl">⬇️</span>
        </button>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Social Media</h4>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
        </div>
      </div>
    </aside>
  );
};

export default NewsSideBar;
