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

const Services2 = () => {
  return (
    <section className="w-full max-w-[90%] md:w-10/12 text-center mx-auto py-12">
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
        EPC (Engineering, Procurement, and Construction) Advisory
      </h2>
      <p className="text-gray-700 mb-10 text-center max-w-3xl">
        ARG distinguishes itself as a provider of comprehensive Engineering,
        Procurement, and Construction (EPC) solutions, adeptly managing projects
        from their initial concept through to final commissioning on a turnkey
        basis.
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {epcServices.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow hover:shadow-lg border border-gray-200 p-5 transition"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-cover mb-4 rounded"
            />
            <h4 className="text-lg font-semibold mb-2 text-gray-800">
              {item.title}
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-gray-600 leading-relaxed text-sm md:text-base">
        This holistic EPC approach, built upon ARG’s foundational services,
        allows the company to take full responsibility for complex projects,
        delivering them efficiently and effectively with construction commencing
        concurrently with the design process for significant time savings.
      </p>
    </section>
  );
};

export default Services2;
