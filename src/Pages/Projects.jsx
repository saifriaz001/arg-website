import React from "react";
import ProjectsTopSection from "../components/ProjectTopSection";
import InternationalProjectsSection from "../components/InternationalProjectsSection";
import IndianProjectsSection from "../components/IndianProjectsSection";

const ProjectsInside = () => {
  return (
    <div>
      <ProjectsTopSection />
      <InternationalProjectsSection />
      <IndianProjectsSection />
    </div>
  );
};

export default ProjectsInside;
