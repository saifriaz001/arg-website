// src/Pages/Projects.jsx
import React, { useState, useMemo } from "react";
import "./Section.css";
import ServiceDropdown from "../ReuseableComponents/ServiceDropDown";
import FilterUIBar from "../NewsPageComponents/FilterUIBar";
import SortBar from "../NewsPageComponents/SortBar";
import { projects } from "../utils/constants";
import { Link } from "react-router";
import { projectFilterOptions } from "../utils/constants";

// import image1 from "../assets/Ballabhgarh.png";
// import image2 from "../assets/Vrinda City1.png";
// import image3 from "../assets/NRIlakecity.avif";
// import image4 from "../assets/SmartIndustrialPark.png";
// import image5 from "../assets/RajaNaharSinghCricket.png";
// import image6 from "../assets/100BeddedPrince.avif";
// import image7 from "../assets/AliRezaShoppinMall.png";
// import image8 from "../assets/SaudiAerospace.png";
// import image9 from "../assets/AdministrationBuilding.avif";

const Projects = () => {
  const [selected, setSelected] = useState("All Projects");
  const [selectedFilters, setSelectedFilters] = useState({});
  const handleFilterChange = (category, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: prev[category] === value ? null : value,
    }));
  };
  const handleClearFilters = () => {
    setSelectedFilters({});
  };

  // Memoize the filtering logic for performance
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Object.entries creates an array of [key, value] pairs from the selectedFilters object
      return Object.entries(selectedFilters).every(([key, value]) => {
        // If a filter is not set (null/undefined) or is "All", it should not filter out any projects
        if (!value || value === "All") {
          return true;
        }

        // For the 'service' filter, we need to check if the project's services array includes the selected service
        if (key === "service") {
          return project.services.includes(value);
        }

        // For other filters like 'market' and 'location', we do a direct string comparison
        return project[key] === value;
      });
    });
  }, [selectedFilters]);

  return (
    <section className="section-layout bg-[#FFFDFA] ">
      <div className="max-w-7xl mx-auto">
        <h1 className="heading-title">Projects</h1>

        <div className="paragraph-lg">
          ARG partners with clients to take on their most complex challenges and
          pioneer innovative solutions that make a positive, lasting impact.
        </div>
        <p className="paragraph-sm">
          Across the globe, our teams push the limits of what’s possible and
          build legacies for generations to come – the world’s longest
          cable-stayed bridge, record-breaking sports events, the largest
          greenfield port development mega project, life-sustaining disaster
          recovery programs, and the tallest tower in the Western Hemisphere.
        </p>

        {/* <ServiceDropdown
          services={projects}
          selected={selected}
          setSelected={setSelected}
          text={"Filter projects by:"}
          option={"All Projects"}
        /> */}
        
        {/* The new FilterUIBar, replacing the old dropdown */}
        <div className="my-8">
          <SortBar onClear={handleClearFilters} />
          <FilterUIBar
            dropdownOptions={projectFilterOptions}
            selectedFilters={selectedFilters}
            onSelect={handleFilterChange}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1">
          {filteredProjects
            .filter((s) => selected === "All Projects" || s.title === selected)
            .map((proj, idx) => (
              <Link
                key={proj.slug}
                className="cursor-pointer relative group h-64 overflow-hidden  shadow-md"
                to={`project/${proj.slug}`}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover brightness-50 transform group-hover:brightness-100 transition duration-500 ease-in-out group-hover:scale-105 "
                />
                <div className="absolute bottom-0 left-0 right-0  p-3 text-white">
                  <h4 className="text-sm md:text-xs uppercase lg:text-base sm:text-base font-semibold">
                    {proj.title}
                  </h4>
                </div>
              </Link>
            ))}
        </div>
        {/* Optional: Show a message if no projects match the filter */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 col-span-full">
            <h2 className="text-3xl font-[var(--font-heading)] mb-2">
              No Projects Found
            </h2>
            <p className="text-[var(--color-text-secondary)]">
              Please adjust your filters or clear them to see all projects.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
