// components/NewsSideBar.jsx
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { RiDownloadCloud2Line } from "react-icons/ri";

const NewsSideBar = ({ contacts }) => {
  return (
    <aside className="sidebar">
      {/* Media Contacts */}
      <div>
        <h3 className="sidebar-heading">Media contacts</h3>
        <ul className="sidebar-list">
          {contacts.map((contact, i) => (
            <li key={i}>
              <span className="sidebar-link">{contact.name}</span>,{" "}
              {contact.regions}
            </li>
          ))}
        </ul>
      </div>

      {/* Download */}
      <div>
        <h4 className="sidebar-subheading">ARG fact sheet</h4>
        <button className="download-button">
          Download
          <span className="text-xl">
            <RiDownloadCloud2Line />
          </span>
        </button>
      </div>

      {/* Social Media */}
      <div>
        <h4 className="sidebar-subheading">Social Media</h4>
        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaYoutube />
          <FaInstagram />
        </div>
      </div>
    </aside>
  );
};

export default NewsSideBar;
