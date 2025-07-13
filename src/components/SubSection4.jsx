import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/atul.avif"
import image2 from "../assets/b.u.khan.avif"
import image3 from "../assets/faisal.avif"
import image4 from "../assets/imran.avif"
import image5 from "../assets/Mohinish-garga.avif"
import image6 from "../assets/somya.avif"
const leaders = [
  {
    name: 'Ar. Mohinish Garga',
    title: 'Partner, Sustainable Developments',
    bio: `Mohinish is a global infrastructure visionary...`,
    highlight: 'Master’s degree in Sustainable Urban Development from the University of Oxford, UK.',
    image: image5,
  },
  {
    name: 'Ar. Atul Tripathi',
    title: 'Partner, Project Planning & Delivery',
    bio: `A results-driven leader...`,
    highlight: 'Construction Management from NICMAR, Pune.',
    image: image1,
  },
  {
    name: 'Ar. Faisal Riaz Khan',
    title: 'Partner, Architecture, Engineering & Construction (AEC)',
    bio: `With over 18 years of experience...`,
    highlight: 'Master’s in Building Engineering and Management from SPA Delhi.',
    image: image3,
  },
  {
    name: 'Ar. Somya Suneja',
    title: 'Associate Partner, Business Development',
    bio: `Somya brings a global perspective...`,
    highlight: 'MSc in Project and Enterprise Management from UCL.',
    image: image6,
  },
  {
    name: 'Ar. I. Chishty',
    title: 'Partner, Architecture and Design',
    bio: `Chishty brings a distinguished track record...`,
    highlight: 'Master’s in Intelligent Buildings from University of Reading, UK.',
    image: image4,
  },
  {
    name: 'Er. B.U. Khan',
    title: 'Senior Advisor, Project & Construction Management',
    bio: `Er. Khan brings to ARG nearly five decades...`,
    highlight: 'Mechanical Engineering from Aligarh Muslim University.',
    image: image2,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const SubSection4 = () => {
  return (
    <section className="w-[10/12] bg-white py-16 px-4 md:px-10">
      <div className="w-10/12 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Leadership: A Legacy of Expertise</h2>
        <p className="text-subtle max-w-3xl mx-auto mb-12">
          Meet the minds behind AECS — a team of seasoned experts dedicated to shaping transformative infrastructure and sustainable futures.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {leaders.map((leader, index) => (
            <motion.div
              key={leader.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="bg-[#fffaf2] rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-all duration-300"
            >
              <img
                src={leader.image}
                alt={leader.name}
                className="w-32 h-32 rounded-full object-cover mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-dark text-center">{leader.name}</h3>
              <p className="text-primary text-sm font-medium text-center mb-2">{leader.title}</p>
              <p className="text-subtle text-sm mb-2">{leader.bio}</p>
              <p className="text-sm font-semibold text-dark">{leader.highlight}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubSection4;
