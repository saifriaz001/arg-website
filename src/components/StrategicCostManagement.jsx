import React, { useState, useEffect } from 'react';
import image1 from "../assets/Business Strategy.png";
import image2 from "../assets/value.webp";
import image3 from '../assets/Financial.png';
import ButtonWithArrow from '../ReuseableComponents/ButtonWithArrow';

const topFeatures = [
  {
    title: 'Cost Analysis and Estimation',
    description: 'ARG provides clients with accurate budgetary forecasts, from preliminary estimates to detailed post-design completion costing.',
    image: image1,
  },
  {
    title: 'Value Engineering / Design Review',
    description: 'Our critical evaluation of design options and materials identifies efficiencies and eliminates unnecessary costs.',
    image: image2,
  },
  {
    title: 'Financial Control Systems',
    description: 'Robust cost management strategies empower significant savings across the entire project lifecycle.',
    image: image3,
  },
];

const StrategicCostManagement = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (topFeatures.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % topFeatures.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  if (!topFeatures || topFeatures.length === 0) return null;

  const topFeature = topFeatures[currentIndex];

  return (
    <section className="w-full mb-10">
      <div className="feature-card relative w-full h-fit overflow-hidden shadow-md group flex flex-col">
        <img
          src={topFeature.image}
          alt={topFeature.title}
          className="feature-card-image"
        />
        <div className="feature-card-body flex flex-col  ">
          <h3 className="feature-card-title">{topFeature.title}</h3>
          <p className="feature-card-description min-h-[60px]">
            {topFeature.description}
          </p>
          <div className="mt-auto pt-4 ">
            <ButtonWithArrow to={"/sub-pages/strategic-cost-management"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrategicCostManagement;
