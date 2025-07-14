import React from "react";
import image1 from "../assets/Ballabhgarh.png"
import image2 from "../assets/Vrinda City.avif"
import image3 from "../assets/NRIlakecity.avif"
import image4 from "../assets/SmartIndustrialPark.png"
import image5 from "../assets/RajaNaharSinghCricket.png"


const indianProjects = [
  {
    title: "Raja Nahar Singh Cricket Stadium, Faridabad",
    description:
      "ARG managed this prestigious hospitality and sports infrastructure project for the Municipal Corporation, Faridabad. The scope involved Architecture Design and Project Management for the construction of the international cricket stadium and associated facilities, demonstrating capabilities in large public recreational projects.",
    image: image5,
  },
  {
    title: "Smart Industrial Park, Padora, Shivpuri",
    description:
      "ARG was responsible for the Infrastructure Design of this large-scale smart industrial park for the Industrial Infrastructure Development Corp. (IIDC). This project, valued at INR 650 cr, involved planning for industrial plots, residential areas, commercial zones, and green spaces, highlighting ARG’s expertise in urban and industrial infrastructure planning.",
    image: image4,
  },
  {
    title: "NRI Lake City, Rudrapur",
    description:
      "ARG provided Urban Design and Architecture services for this 125-acre world-class township. Designed to accommodate a population of 15,000, the project incorporated sustainable design principles and included amenities like schools, hospitals, and shopping centers. This underscores ARG’s capabilities in large-scale urban development and master planning.",
    image: image3,
  },
  {
    title: "Vrinda City, Greater Noida",
    description:
      "ARG led the architectural and infrastructure design for the development of Vrinda City Group Housing in Sector PHI-IV, Greater Noida—a ready-to-move, gated residential township spanning approximately 7.8 acres and comprising 364 apartments.",
    image: image2,
  },
  {
    title: "Ballabhgarh Bus Terminal Redevelopment",
    description:
      "ARG led the architectural and infrastructure design for the 25-acre Ballabhgarh Bus Terminal redevelopment, integrating multimodal transit under a BOT/DFBOT model. Showcasing expertise in phased large-scale public projects with complex stakeholder coordination.",
    image: image1,
  },
];

const IndianProjectsSection = () => {
  return (
    <section className="w-[10/12] px-4 py-10 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl text-center md:text-4xl font-bold   leading-tight nourd  text-dark  mb-10 ">
          Indian Portfolio
        </h2>

        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 lg:grid-cols-2 gap-10">
          {indianProjects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col  bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl   nourd  font-semibold text-dark nourd   mb-2">
                  {project.title}
                </h3>
                <p className="nourd text-wrap text-subtle  text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndianProjectsSection;
