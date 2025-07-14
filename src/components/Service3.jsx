import React from "react";
import image1 from "../assets/ArchitecturalDesign.png"
import image2 from "../assets/CivilInfrastructure.png"
import image3 from "../assets/MEP.png"
import image4 from "../assets/StructuralEngineering.jpg"
const architectureServices = [
  {
    title: "Architectural Design",
    image: image1, // Replace with your actual asset path
    description:
      "Creating innovative spatial solutions that blend form and function through collaborative design processes and advanced modeling techniques.",
  },
  {
    title: "Structural Engineering",
    image: image4, // Replace with your actual asset path
    description:
      "Ensuring structural integrity and efficiency through sophisticated analysis and engineering principles that support architectural vision.",
  },
  {
    title: "MEP Services",
    image: image3, // Replace with your actual asset path
    description:
      "Comprehensive Mechanical, Electrical, and Plumbing solutions that optimize building performance, energy efficiency, and occupant comfort.",
  },
  {
    title: "Civil Infrastructure",
    image: image2, // Replace with your actual asset path
    description:
      "Developing sustainable site solutions and infrastructure systems that connect buildings seamlessly with their surroundings.",
  },
];

const Services3 = () => {
  return (
    <section className="w-full max-w-[90%] md:w-10/12 mx-auto py-12">
      <h2 className="text-2xl md:text-3xl  font-semibold nourd text-dark  text-center mb-2">
        Architecture Engineering & Design
      </h2>
      <p className="text-subtle  mb-10 max-w-7xl text-center">
        ARG possesses robust in-house design capabilities, further augmented by
        strategic collaborations with specialized design firms, to deliver
        comprehensive and innovative solutions across a wide spectrum of
        engineering disciplines.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {architectureServices.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition border border-gray-200 p-5"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-36 w-full object-cover rounded mb-4"
            />
            <h4 className="nourd text-[19px] md:text-base  xl:text-[19px] font-semibold text-dark nourd   mb-2">
              {item.title}
            </h4>
            <p className="nourd text-subtle   text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-gray-600 text-sm md:text-base leading-relaxed nourd text-subtle  space-y-4">
        <p>
          The firm leverages sophisticated software and embraces the latest
          innovations in design practices to ensure that its solutions are both
          cutting-edge and contextually appropriate. ARG’s dedicated “Design
          Management” services play a crucial role in this process, ensuring
          meticulous coordination between various design disciplines,
          guaranteeing construction compatibility, and maximizing efficiency
          throughout all stages of design.
        </p>
        <p>
          This commitment to advanced engineering and design excellence ensures
          that ARG’s projects are not only aesthetically compelling but also
          functionally superior and built to last.
        </p>
      </div>
    </section>
  );
};

export default Services3;
