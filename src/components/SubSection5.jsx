import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaBalanceScale, FaUsers, FaLightbulb, FaGlobeAsia } from 'react-icons/fa';

const values = [
  {
    title: 'Client-Centricity',
    icon: <FaHandshake size={24} />,
    desc: `A deep-seated dedication to thoroughly understanding and effectively achieving client goals is paramount. ARG positions itself as a client–centered company, leveraging its extensive relationships, knowledge, and abilities to meet diverse client needs across multiple scopes.`,
  },
  {
    title: 'Integrity & Professionalism',
    icon: <FaBalanceScale size={24} />,
    desc: `ARG is committed to upholding the highest tenets of honesty, fairness, and professional conduct in all its dealings and transactions. The firm strives to be impartial and unbiased, ensuring no compromise in its commitment to these principles, irrespective of circumstances.`,
  },
  {
    title: 'Teamwork & Excellence',
    icon: <FaUsers size={24} />,
    desc: `Fostering a collaborative work environment is crucial to ARG’s success. The firm unites its team through shared values of teamwork, respect, and integrity, striving for the highest quality in every task executed.`,
  },
  {
    title: 'Innovation & Growth',
    icon: <FaLightbulb size={24} />,
    desc: `ARG believes in continuous improvement and consciously invests in the growth and development of its individuals and the organization as a whole. This includes embracing the latest and most effective engineering, design, and management strategies.`,
  },
  {
    title: 'Sustainability & Societal Contribution',
    icon: <FaGlobeAsia size={24} />,
    desc: `A strong commitment to environmental responsibility is woven into ARG’s fabric. The firm channels its resources toward building and maintaining high standards while aiming to make meaningful contributions to society through its work and ethics.`,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

const SubSection5 = () => {
  return (
    <section className="bg-cream py-16 px-6 md:px-16">
      <div className="w-10/12 mx-auto text-dark">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-10">Core Values</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              className="group bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-primary"
            >
              <div className="flex items-start gap-4">
                <div className="text-primary">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-lg text-dark mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-subtle text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubSection5;
