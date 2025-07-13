import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Use your routing system

const services = [
  {
    number: 1,
    title: 'Strategic Cost Management',
    description: `ARG excels in ensuring projects meet budgetary constraints without sacrificing quality or scope.`,
    link: '/services/strategic-cost-management',
  },
  {
    number: 2,
    title: 'EPC Advisory',
    description: `Comprehensive turn-key project solutions from design to procurement and delivery, including Construction Arm integration.`,
    link: '/services/epc-advisory',
  },
  {
    number: 3,
    title: 'Advanced Engineering and Design',
    description: `Innovative solutions across disciplines—from Architectural and Structural to MEP and Civil infrastructure.`,
    link: '/services/engineering-design',
  },
  {
    number: 4,
    title: 'Strategic Project Management',
    description: `Efficiently managing projects across all development stages for optimal results.`,
    link: '/services/project-management',
  },
  {
    number: 5,
    title: 'Environmental Solutions',
    description: `Providing sustainable, compliant, and performance-oriented environmental frameworks.`,
    link: '/services/environmental',
  },
  {
    number: 6,
    title: 'Global Government Advisory',
    description: `Offering strategic services to governments and civic institutions worldwide.`,
    link: '/services/government-advisory',
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const SubSection6 = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="w-10/12 mx-auto text-dark">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Comprehensive Service Verticals</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="bg-[#fffaf2] rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-primary"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary text-xl font-bold rounded-full border border-primary w-8 h-8 flex items-center justify-center">
                  {service.number}
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-dark mb-2">{service.title}</h3>
                  <p className="text-subtle text-sm leading-relaxed mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-primary font-medium text-sm hover:underline transition"
                  >
                    Know More <FaArrowRight className="ml-1 text-xs" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubSection6;
