import React, { useState } from 'react';
import Service1 from '../components/StrategicCostManagement';
import Services2 from '../components/EPCAdvisory';
import Services3 from '../components/ArchitectureEngineering';
import Services4 from '../components/ProjectManagement';
import Services5 from '../components/GovernmentAdvisory';
import Services6 from '../components/EnvironmentalSolutions';
import './Section.css';
const servicesData = [
  {
    title: 'Strategic Cost Management',
    content: (  
      <Service1/>
    ),
  },
  {
    title: 'EPC Advisory',
    content: (
        <Services2/>
    ),
  },
  {
    title: 'Advanced Engineering and Design',
    content: (
        <Services3/>
    ),
  },
  {
    title: 'Strategic Project Management',
    content: (
        <Services4/>

    ),
  },
  {
    title: 'Environmental Solutions',
    content: (
        <Services6/>
    ),
  },
  {
    title: 'Global Government Advisory',
    content: (
        <Services5/>      
    ),
  },
    {
    title: 'Concept to Completion',
    content: (
        <Services5/>
    ),
  },
  {
    title: 'Planning & Design Services',
    content: (
        <Services5/>

    ),
  },
  {
    title: 'Management & Optimization',
    content: (
        <Services5/>
    ),
  },
];

const Services = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <div className="w-10/12 mx-auto px-4 py-12">
      <h1 className="nourd text-center text-primary text-4xl md:text-5xl text-dark font-bold mb-10">
        Our Comprehensive Services
      </h1>
      <div className="space-y-6">
        {servicesData.map((service, i) => (
          <div
            key={i}
            className="bg-[#F9F6F2] rounded-lg shadow transition-all duration-300"
          >
            <button
              onClick={() => toggle(i)}
              className=" nourd text-subtle  w-full flex justify-between items-center px-6 py-4 text-left text-xl  focus:outline-none"
            >
              {service.title}
              <span className="text-2xl transform transition-transform duration-200">
                {openIndex === i ? '−' : '+'}
              </span>
            </button>
            <div
              className={`px-6 pb-6 text-dark text-base transition-all duration-300 ease-in-out ${
                openIndex === i ? 'block' : 'hidden'
              }`}
            >
              {service.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
