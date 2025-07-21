import React from 'react';
import { motion } from 'framer-motion';
import image1 from "../assets/Pareek-sahab-Executive-head-shot.avif";
import image2 from "../assets/BasharatUllah Khan.avif";
import image3 from "../assets/faisal.avif";
import image4 from "../assets/imran.avif";
import image5 from "../assets/Mohinish-garga.avif";
import image6 from "../assets/Somya.avif";

const leaders = [
  {
    name: 'Ar. Mohinish Garga',
    title: 'Partner, Sustainable Developments',
    bio: `Mohinish is a global infrastructure visionary with over three decades of experience spearheading transformative projects across continents. He holds a Master’s degree in Sustainable Urban Development from the University of Oxford, UK, and brings deep expertise in aligning development strategies with global sustainability goals. As an advisor to the Board on UN Sustainable Development initiatives, he plays a pivotal role in driving environmentally responsible and future–focused urban growth within the firm’s portfolio.`,
    highlight: 'Master’s degree in Sustainable Urban Development from the University of Oxford, UK',
    image: image5,
  },
  {
    name: 'Er. M. Narayan Pareek',
    title: 'Partner, Project Planning & Delivery',
    bio: `An accomplished leader in construction planning and management, specializing in Contract Management. With a B.E. in Civil Engineering from MANIT, Bhopal, 1975, Mr. Pareek has more than five decades of experience in steering numerous EPC contracts to success in India and abroad. Known for his expertise in project planning, execution, and strategic delivery, he emphasizes efficiency, value engineering, and operational excellence at every project phase.`,
    highlight: 'B.E. in Civil Engineering from MANIT, Bhopal (1975)',
    image: image1,
  },
  {
    name: 'Ar. Faisal Riaz Khan',
    title: 'Partner, Architecture, Engineering & Construction (AEC)',
    bio: `With over 18 years of experience, Faisal specializes in delivering integrated solutions for large–scale developments. With a Master’s in Building Engineering and Management from SPA Delhi, he is recognized for aligning design excellence with precision execution. His core strengths lie in driving value engineering, optimizing project delivery frameworks, and leading cross–functional teams across all phases of development.`,
    highlight: 'Master’s in Building Engineering and Management from SPA Delhi',
    image: image3,
  },
  {
    name: 'Ar. Somya Suneja',
    title: 'Associate Partner, Business Development',
    bio: `Somya brings a global perspective to the built environment sector, backed by an MSc in Project and Enterprise Management from University College London (UCL). She specializes in business development and strategic project leadership, identifying growth opportunities and building long–term client partnerships. With expertise in enterprise planning, stakeholder engagement, and risk–managed execution, she plays a pivotal role in delivering transformative, high–impact development solutions.`,
    highlight: 'MSc in Project and Enterprise Management from University College London (UCL)',
    image: image6,
  },
  {
    name: 'Ar. I. Chishty',
    title: 'Partner, Architecture and Design',
    bio: `Ar. I. Chishty brings a distinguished track record of delivering design excellence through innovative, client–focused architectural solutions. With a Master’s degree in Intelligent Buildings from the University of Reading, UK, he blends architectural vision with technological integration to create responsive, future–ready environments. His leadership spans the full spectrum of architectural design—from concept development to project realization—driving the evolution of smart, sustainable, and user–centric spaces across our portfolio.`,
    highlight: 'Master’s degree in Intelligent Buildings from the University of Reading, UK',
    image: image4,
  },
  {
    name: 'Er. B.U.Khan',
    title: 'Senior Advisor, Project & Construction Management',
    bio: `Engr. Khan brings to ARG nearly five decades of distinguished experience in project, design, and construction management, with a proven track record across the Kingdom of Saudi Arabia and India. A graduate in Mechanical Engineering from Aligarh Muslim University (1975), he specialized in structural design and has since led numerous high–value infrastructure and industrial projects. His deep technical expertise and leadership continue to guide and strengthen ARG’s commitment to engineering excellence.`,
    highlight: 'Mechanical Engineering from Aligarh Muslim University (1975)',
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
    <motion.section
      className="mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="heading-title">Leadership: A Legacy of Expertise</h2>
      <p className="paragraph-lg">
        Meet the minds behind AECS — a team of seasoned experts dedicated to shaping transformative infrastructure and sustainable futures.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            className="group card h-[450px]"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Static View */}
            <div className="relative z-10 pointer-events-auto">
              <img src={leader.image} alt={leader.name} className="card-image" />
              <h3 className="card-name">{leader.name}</h3>
              <p className="card-title">{leader.title}</p>
              <div className="card-bio">{leader.bio}</div>
              <p className="card-highlight">{leader.highlight}</p>
            </div>

            {/* Hover Overlay */}
            <div className="card-hover-overlay">
              <div className="card-overlay-content">
                <img src={leader.image} alt={leader.name} className="card-image-sm" />
                <h3 className="card-name mb-1">{leader.name}</h3>
                <p className="text-base text-center mb-2">{leader.title}</p>
                <p className="text-xs text-center px-2 mb-2">{leader.bio}</p>
                <p className="card-highlight">{leader.highlight}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default SubSection4;
