// src/Pages/ProjectDetailPage.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../utils/constants";
import FilterUIBar from "../NewsPageComponents/FilterUIBar";
import "./Section.css";
import { projectFilterOptions } from "../utils/constants";

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  const [selectedFilters, setSelectedFilters] = useState({});
  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
  };

  // If no project is found for the given slug, show a message
  if (!project) {
    return (
      <section className="section-layout">
        <div className="max-w-7xl mx-auto text-center py-20">
          <h1 className="heading-title">Project Not Found</h1>
          <p className="paragraph-lg mt-4">
            Sorry, we couldn't find the project you're looking for.
          </p>
          <Link
            to="/projectspage"
            className="text-orange-300 hover:underline mt-8 inline-block"
          >
            &larr; Back to all projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header Section */}
      <section className="section-layout">
        {" "}
        {/* Different BG Color */}
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-title md:text-6xl ">{project.title}</h1>
          <p className="paragraph-lg text-gray-600 mb-6">{project.location}</p>

          {/* Filter UI Bar */}
          {/* <FilterUIBar
            dropdownOptions={projectFilterOptions}
            selectedFilters={selectedFilters}
            onSelect={handleFilterChange}
          /> */}
        </div>
      </section>

      {/* Full-width Image Section */}
      <div className="w-full">
        <img
          src={project.img}
          alt={`Image of ${project.title}`}
          className="w-full h-auto md:h-[400px] object-cover"
        />
      </div>

      {/* Main Content Section */}
      <section className="section-layout">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Side: Main Content */}
            <div className="w-full lg:w-2/3">
              {/* Optional Note */}
              {project.note && (
                <p className="paragraph-lg italic font-semibold text-gray-800 mb-6 border-l-4 border-gray-300 pl-4">
                  {project.note}
                </p>
              )}

              {/* Introduction */}
              {project.introduction && (
                <p className="paragraph-lg text-gray-700 mb-8">
                  {project.introduction}
                </p>
              )}

              {/* Detailed Sections */}
              <div className="space-y-8">
                {project.sections.map((section, index) => (
                  <div key={index}>
                    <h3 className="text-2xl font-semibold mb-3 font-[var(--font-heading)] text-[var(--color-heading)]">
                      {section.heading}
                    </h3>
                    <p className="paragraph-sm text-gray-600 leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Sidebar with Services */}
            <div className="w-full lg:w-1/3 lg:sticky top-10 self-start">
              <div className="border-t-2 border-gray-300 pt-4">
                <h3 className="text-xl font-semibold mb-4 font-[var(--font-heading)] text-[var(--color-heading)]">
                  Services
                </h3>
                <ul className="space-y-2">
                  {project.services.map((service, index) => (
                    <li key={index} className="paragraph-sm text-gray-700">
                      {service}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectDetailPage;
