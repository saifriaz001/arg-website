import React from "react";
import image1 from "../assets/100BeddedPrince.avif"
import image2 from "../assets/AliRezaShoppinMall.png"
import image3 from "../assets/SaudiAerospace.png"
import image4 from "../assets/AdministrationBuilding.avif"


const saudiProjects = [
  {
    title: "Administration Building, Najran University",
    description:
      "ARG served as the Main Contractor for the construction of iconic twin towers, each comprising 13 storeys. The firm’s role encompassed comprehensive project management, including planning, resource organization, budget control, safety management, and ensuring quality and timely delivery.",
    image: image1,
  },
  {
    title: "100 Bedded Prince Mansour Military Hospital",
    description:
      "ARG undertook the Construction Management for this critical healthcare facility for the Ministry of Defence (MODA). As the Main Contractor, ARG meticulously planned and executed the overall construction, managing all sub-contractors and ensuring adherence to stringent quality and safety standards.",
    image: image2,
  },
  {
    title: "Ali Reza Shopping Mall",
    description:
      "ARG provided Turn-Key Execution for this major commercial development. The team managed all aspects, from planning and resource allocation to budget adherence, safety protocols, and timely completion, including supervision of all sub-contractors.",
    image: image3,
  },
  {
    title: "Saudi Aerospace Engineering Industries",
    description:
      "ARG provided comprehensive Project Management for the construction of the head office for this key aerospace entity. The team managed all aspects of the construction process, ensuring the delivery of a state-of-the-art facility that meets the specialized requirements of the aerospace industry while maintaining the highest standards of quality and safety.",
    image: image4,
  },
];

const InternationalProjectsSection = () => {
  return (
    <section className="w-[10/12] bg-white px-4 py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-800 mb-10">
          International Portfolio: Kingdom of Saudi Arabia
        </h2>

        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-2 gap-10">
          {saudiProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col  bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full  h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalProjectsSection;
