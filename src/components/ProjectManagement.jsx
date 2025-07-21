import React from "react";
import {
  ClipboardDocumentCheckIcon,
  CalendarDaysIcon,
  Cog6ToothIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

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
  return (
    <section className="section-layout">
      <div className="max-w-7xl mx-auto">
      <h2 className="heading-title" >
        Strategic Project Management
      </h2>

      <p className="paragraph-lg">
        ARG’s approach to Strategic Project Management is holistic and
        client-focused, positioning the firm as a virtual extension of the
        client’s organization. This comprehensive service covers every phase of
        the project lifecycle, including meticulous pre-construction planning,
        on-site construction management, and thorough post-construction
        services.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {projectManagementItems.map((item, idx) => (
          <div
            key={idx}
            className="feature-card"
          >
            <item.icon className="h-20 w-20 text-[#D87026] p-4 " />
            <div className="feature-card-body -mt-2">
            <h4 className="feature-card-title">
              {item.title}
            </h4>
            <p className="feature-card-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10  paragraph-sm-service">
        <p>
          Beyond these core functions, ARG offers a suite of specialized
          management services that contribute to its holistic offering. These
          include <strong className='strong' >Tender Management</strong>, ensuring the selection of
          qualified contractors through transparent and competitive bidding
          processes;
          <strong className='strong' > Client Representation</strong>, acting as the single point of
          contact and safeguarding client interests;
          <strong className='strong' > Claims Management</strong>, expertly handling and preparing
          claims to protect client positions; and{" "}
          <strong className='strong' >Dispute Management</strong>, employing effective strategies to
          resolve conflicts amicably and efficiently.
        </p>
      </div>
      </div>
    </section>
  );
};

export default ProjectManagement;
