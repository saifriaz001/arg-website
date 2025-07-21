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

const ArchitectureEngineering = () => {
  return (
    <section className="section-layout">
      <div className="max-w-7xl mx-auto">
      <h2 className=" heading-title">
        Architecture Engineering & Design
      </h2>
      <p className="paragraph-lg">
        ARG possesses robust in-house design capabilities, further augmented by
        strategic collaborations with specialized design firms, to deliver
        comprehensive and innovative solutions across a wide spectrum of
        engineering disciplines.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {architectureServices.map((item, idx) => (
          <div
            key={idx}
            className="feature-card">
            <img
              src={item.image}
              alt={item.title}
              className="feature-card-image"
            />
            <div className="feature-card-body" >
            <h4 className="feature-card-title">
              {item.title}
            </h4>
            <p className="feature-card-description">
              {item.description}
            </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 paragraph-sm-service">
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
      </div>
    </section>
  );
};

export default ArchitectureEngineering;
