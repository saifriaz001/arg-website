import React, { useState } from 'react';
import image1 from "../assets/Strategic-Cost-Management.jpg";
import image2 from "../assets/EPC-Advisory.avif";
import image3 from "../assets/Advanced-Engineering-&-Design.jpg";
import image4 from "../assets/Strategic-Project-Management2.jpg";
import image5 from "../assets/Environmental-Solutions.jpg";
import image6 from "../assets/global-industry-solutions.jpg";
import ServiceDropdown from '../ReuseableComponents/ServiceDropDown';

const servicesData = [
  { title: "Strategic Cost Management", image: image1 },
  { title: "EPC Advisory", image: image2 },
  { title: "Advanced Engineering & Design", image: image3 },
  { title: "Strategic Project Management", image: image4 },
  { title: "Environmental Solutions", image: image5 },
  { title: "Global Government Advisory", image: image6 },
];

const ServicesPage = () => {
  const [selected, setSelected] = useState('All Services');

  return (
    <section className="section-layout bg-[#FFFDFA] ">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="heading-title">Services</h1>

        {/* Intro */}
        <p className="paragraph-lg">
          ARG partners with clients to take on their most complex challenges and pioneer innovative solutions that make a positive, lasting impact.
        </p>
        <p className="paragraph-sm">
          Across the globe, our teams push the limits of what’s possible and build legacies for generations to come – the world’s longest cable-stayed bridge, record-breaking sports events, the largest greenfield port development mega project, life-sustaining disaster recovery programs, and the tallest tower in the Western Hemisphere.
        </p>

        {/* Dropdown */}
        <ServiceDropdown
          services={servicesData}
          selected={selected}
          setSelected={setSelected}
          text={"Select a service:"}
          option={"All Services"}
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
          {servicesData
            .filter((s) => selected === 'All Services' || s.title === selected)
            .map((service, idx) => (
              <div
                key={idx}
                className="relative group h-64 overflow-hidden  shadow-md"
              >
                <img
                  loading="lazy"
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover brightness-50 transform group-hover:brightness-100 transition duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3  text-white group-hover:bg-[#5C4E3D] transition-colors duration-300">
                  <h4 className="text-sm uppercase md:text-xs lg:text-base sm:text-base font-semibold">
                    {service.title}
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
