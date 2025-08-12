import React,{useState , useEffect} from "react";
import {
  ClipboardDocumentCheckIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

import ButtonWithArrow from '../ReuseableComponents/ButtonWithArrow';
const projectManagementItems = [
  {
    title: "Project Planning",
    description: "Detailed planning and resource allocation",
    icon: ClipboardDocumentCheckIcon,
  },
  {
    title: "Scheduling",
    description: "Precise timeline management",
    icon: CalendarDaysIcon,
  },
  {
    title: "Resource Management",
    description: "Efficient allocation of materials and personnel",
    icon: Cog6ToothIcon,
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality control protocols",
    icon: ShieldCheckIcon,
  },
];

const ProjectManagement = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        if (projectManagementItems.length > 0) {
          const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % projectManagementItems.length);
          }, 4000);
          return () => clearInterval(interval);
        }
      }, [projectManagementItems.length]);
  
    if (!projectManagementItems || projectManagementItems.length === 0) {
      return null;
    }
  
    const projectManagementItem = projectManagementItems[currentIndex];

  return (
    <section className="w-full mb-10 ">

 
          <div
            className="feature-card relative w-full h-fit overflow-hidden shadow-md group"
          >
            <projectManagementItem.icon className="h-20 w-20 text-[#D87026] p-4 " />
            <div className="feature-card-body -mt-2">
            <h4 className="feature-card-title">
              {projectManagementItem.title}
            </h4>
            <p className="feature-card-description min-h-[20px]">{projectManagementItem.description}</p>

          <div className="mt-auto pt-4 ">
            <ButtonWithArrow to={"/sub-pages/strategic-cost-management"} />
          </div>
            </div>
          </div>


    </section>
  );
};

export default ProjectManagement;
