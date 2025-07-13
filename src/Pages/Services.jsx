import React, { useState } from 'react';
import Service1 from '../components/Services1';
import Services2 from '../components/Services2';
import Services3 from '../components/Service3';
import Services4 from '../components/Service4';
import Services5 from '../components/Services5';
import Services6 from '../components/Service6';
const servicesData = [
  {
    title: 'Strategic Cost Management',
    content: (
        
      <p className="text-subtle text-base leading-relaxed">
        <Service1/>
        ARG excels in delivering budget-sensitive projects without compromising quality or scope. Our services include Cost Analysis & Estimation, Value Engineering/Design Review, and Financial Control Systems, backed by successful case studies across healthcare, defense, and education.
      </p>
    ),
  },
  {
    title: 'EPC Advisory',
    content: (
      <p>
        <Services2/>
        Comprehensive turnkey solutions from concept to commissioning—covering design, procurement, and construction execution.
      </p>
    ),
  },
  {
    title: 'Advanced Engineering and Design',
    content: (
      <p>
        <Services3/>
        Full-spectrum solutions from Architectural & Structural to MEP and Civil engineering, driven by precision, innovation, and sustainability.
      </p>
    ),
  },
  {
    title: 'Strategic Project Management',
    content: (
      <p>
        <Services4/>
        From pre-construction to post-completion: planning, scheduling, QA/QC, claims, tender, and dispute management—ensuring optimal delivery.
      </p>
    ),
  },
  {
    title: 'Environmental Solutions',
    content: (
      <p>
        <Services6/>
        Water, sanitation, and wastewater infrastructure planning and design; driving sustainable community development and resource efficiency.
      </p>
    ),
  },
  {
    title: 'Global Government Advisory',
    content: (
      <p>
        <Services5/>
        Strategic advisory for large-scale public infrastructure across Indian and Saudi Arabian ministries and agencies.
      </p>
    ),
  },
    {
    title: 'Concept to Completion',
    content: (
      <p>
        <Services5/>
        Strategic advisory for large-scale public infrastructure across Indian and Saudi Arabian ministries and agencies.
      </p>
    ),
  },
  {
    title: 'Planning & Design Services',
    content: (
      <p>
        <Services5/>
        Strategic advisory for large-scale public infrastructure across Indian and Saudi Arabian ministries and agencies.
      </p>
    ),
  },
  {
    title: 'Management & Optimization',
    content: (
      <p>
        <Services5/>
        Strategic advisory for large-scale public infrastructure across Indian and Saudi Arabian ministries and agencies.
      </p>
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
      <h1 className="text-3xl font-bold text-dark mb-10 text-center">
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
              className="w-full flex justify-between items-center px-6 py-4 text-left text-xl font-semibold text-[#D87026] focus:outline-none"
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
