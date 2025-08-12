import React, { useState, useEffect } from "react";
import image1 from '../assets/Engineeringex.png'
import image2 from '../assets/ConstructionManagement.avif'
import image3 from '../assets/ProcurementManagement.png'
import ButtonWithArrow from '../ReuseableComponents/ButtonWithArrow';
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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (epcServices.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % epcServices.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [epcServices.length]);

  if (!epcServices || epcServices.length === 0) {
    return null;
  }

  const epcService = epcServices[currentIndex];

  return (
    <section className="w-full mb-10">



      <div className="feature-card relative w-full h-fit overflow-hidden shadow-md group">
        <img
          src={epcService.image}
          alt={epcService.title}
          className="feature-card-image"
        />
        <div className="feature-card-body">
          <h4 className="feature-card-title">
            {epcService.title}
          </h4>
          <p className="feature-card-description min-h-[60px]">
            {epcService.description}
          </p>
          <div className="mt-auto pt-4 ">
            <ButtonWithArrow to={"/sub-pages/strategic-cost-management"} />
          </div>
        </div>
      </div>




    </section>
  );
};

export default EPCAdvisory;
