import React from "react";
import image1 from '../assets/Engineeringex.png'
import image2 from '../assets/ConstructionManagement.avif'
import image3 from '../assets/ProcurementManagement.png'
const epcServices = [
  {
    title: "Engineering Excellence",
    image: image1, // Replace with actual image
    description:
      "Our integrated delivery model seamlessly combines ARG’s strengths in design and engineering, offering clients a single point of accountability and a streamlined project experience.",
  },
  {
    title: "Procurement Management",
    image: image2, // Replace with actual image
    description:
      "ARG ensures all materials and subcontracts are sourced efficiently and cost-effectively, leveraging our industry relationships to optimize value and delivery timelines.",
  },
  {
    title: "Construction Management",
    image: image3, // Replace with actual image
    description:
      "Our expertise guarantees that site operations are executed to the highest standards of safety and quality, while functioning as a “Construction Arm” for clients facilitates fast-track project execution.",
  },
];

const EPCAdvisory = () => {
  return (
    <section className="section-layout">
      <div className="max-w-7xl mx-auto" >
      <h2 className="heading-title">
        EPC (Engineering, Procurement, and Construction) Advisory
      </h2>
      <p className="paragraph-lg">
        ARG distinguishes itself as a provider of comprehensive Engineering,
        Procurement, and Construction (EPC) solutions, adeptly managing projects
        from their initial concept through to final commissioning on a turnkey
        basis.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {epcServices.map((item, idx) => (
          <div
            key={idx}
            className="feature-card"
          >
            <img
              src={item.image}
              alt={item.title}
              className="feature-card-image"
            />
            <div className="feature-card-body">
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

      <p className="paragraph-sm-service mt-10">
        This holistic EPC approach, built upon ARG’s foundational services,
        allows the company to take full responsibility for complex projects,
        delivering them efficiently and effectively with construction commencing
        concurrently with the design process for significant time savings.
      </p>
    </div>
    </section>
  );
};

export default EPCAdvisory;
