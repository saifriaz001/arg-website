import React from "react";
import image1 from "../assets/aquapure.png"
import image2 from "../assets/Mirzapur-STP.avif"
import image3 from "../assets/Mirzapur-STP.avif"
import image4 from "../assets/Screenshot-2025-06-17-164013.png"
import image5 from "../assets/WASTE-WATER.png"
const images = [
  image1, // Replace with actual paths
  image2,
  image3,
  image4,
  image5,
];

const Services6 = () => {
  return (
    <section className="w-full px-4 text-center justify-items-center py-12 bg-white">
      <div className="max-w-7xl  mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Wastewater and Environmental Solutions
        </h2>
        <p className="text-gray-700  text-base md:text-lg leading-relaxed mb-8 max-w-5xl">
          Reflecting its commitment to sustainable development, ARG offers specialized expertise in
          the design and management of projects related to water and sanitation infrastructure. This
          capability is formally recognized, for instance, by its professional licensing in the
          Kingdom of Saudi Arabia, which includes "Water and Sanitation Engineering Consultancies".
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <img src={images[0]} alt="Aquapure Building" className="w-full h-64 object-cover rounded-md shadow-md" />
          <img src={images[1]} alt="STP Map" className="w-full h-64 object-cover rounded-md shadow-md" />
        </div>

        <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed mb-8 max-w-5xl">
          This credential underscores ARG’s capacity to deliver solutions in a critical area of
          environmental engineering. While specific projects may not always be categorized solely
          under “wastewater,” ARG’s involvement in large-scale infrastructure developments, such as
          100MLD STP plant at Pratapgarh, Faridabad, as well as 850 Hectare Smart Industrial Park,
          inherently includes the comprehensive planning and execution of utility infrastructure,
          encompassing sophisticated water supply and wastewater management systems.
        </p>

        <p className="text-gray-700 text-center text-base md:text-lg leading-relaxed mb-10 max-w-5xl">
          This expertise aligns with ARG’s broader commitment to creating environmentally sound and
          resilient infrastructure, contributing to healthier communities and sustainable resource
          management.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.slice(2).map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Environmental infra ${idx + 1}`}
              className="w-full h-52 object-cover rounded-md shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services6;
