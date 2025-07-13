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

const Services4 = () => {
  return (
    <section className="w-full max-w-[90%] md:w-10/12 mx-auto py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
        Strategic Project Management
      </h2>

      <p className="text-gray-700 mb-10 max-w-4xl leading-relaxed">
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
            className="bg-[#FFF7EA] border border-gray-200 p-6 rounded-xl shadow-sm hover:shadow-md transition"
          >
            <item.icon className="h-10 w-10 text-[#D87026] mb-4" />
            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              {item.title}
            </h4>
            <p className="text-sm text-gray-700">{item.description}</p>
          </div>
        ))}
      </div>

      <div className="text-gray-700 text-sm md:text-base space-y-4 leading-relaxed">
        <p>
          Beyond these core functions, ARG offers a suite of specialized
          management services that contribute to its holistic offering. These
          include <strong>Tender Management</strong>, ensuring the selection of
          qualified contractors through transparent and competitive bidding
          processes;
          <strong> Client Representation</strong>, acting as the single point of
          contact and safeguarding client interests;
          <strong> Claims Management</strong>, expertly handling and preparing
          claims to protect client positions; and{" "}
          <strong>Dispute Management</strong>, employing effective strategies to
          resolve conflicts amicably and efficiently.
        </p>
      </div>
    </section>
  );
};

export default Services4;
