import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const SubSectionGlobal = () => {
  return (
    <motion.section
      className="mt-20"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div>
        <h2 className="heading-title">Global Reach, Local Expertise: Our Presence</h2>
        <p className="paragraph-lg">
          AECS Research Global (ARG) combines its extensive international project experience with a strong local presence in key markets, ensuring that clients benefit from both global best practices and nuanced regional understanding. The firm’s operational footprint is strategically designed to support projects across diverse geographies.
        </p>

        <h3 className="subheading">International Footprint</h3>
        <p className="paragraph-sm">
          ARG's capability to deliver projects internationally is well–documented, with significant operational hubs and formal registrations that facilitate seamless service delivery.
        </p>

        <ul className="paragraph-sm -mt-10 space-y-2">
          <li>
            <strong className="strong">Saudi Arabia:</strong> ARG has an established and significant presence in the Kingdom of Saudi Arabia, evidenced by a portfolio of major projects and formal licensing. The KSA regional office is located at Prince Sultan Street, Al Naeem District, Jeddah.
          </li>
          <li>
            <strong className="strong">UAE:</strong> Dubai serves as another critical operational base for ARG in the GCC region. The office is situated at Office No. 1265, Tamani Arts Center, Business Bay, Dubai.
          </li>
          <li>
            <strong className="strong">India:</strong> India serves as a hub for Engineering Operations. The Office is located at 148, Jasola Pocket 2, New Delhi 110025.
          </li>
        </ul>
      </div>
    </motion.section>
  );
};

export default SubSectionGlobal;
