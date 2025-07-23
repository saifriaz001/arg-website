import { motion } from "framer-motion";
import differenceImage from '../../assets/SubPages/AECS-Different.png';
import { PiStackBold, PiCpuBold, PiBuildingsBold } from "react-icons/pi";

const differences = [
  {
    icon: <PiStackBold className="text-2xl mustard-color mx-auto mb-3" />,
    title: "Multi-disciplinary Expertise",
    description:
      "Our integrated teams span architecture, MEP engineering, quantity surveying, and project management, eliminating coordination gaps that plague traditional delivery models.",
  },
  {
    icon: <PiCpuBold className="text-2xl mustard-color mx-auto mb-3" />,
    title: "Proprietary Digital Tools",
    description:
      "AI-powered cost insights, digital performance dashboards, and advanced analytics provide unprecedented visibility into project health and performance metrics.",
  },
  {
    icon: <PiBuildingsBold className="text-2xl mustard-color mx-auto mb-3" />,
    title: "Cross-Sector Experience",
    description:
      "Extensive work with both government agencies and private-sector developers gives us unique insights into institutional compliance requirements and funding mechanisms.",
  },
];

const WhatMakesAECSDifferent = () => {
  return (
    <section className="mustard-section">
      <motion.div
        className="mustard-section-overlap"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="heading-title">What Makes AECS Different?</h2>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <img
              src={differenceImage}
              alt="Team Collaboration"
              className="w-full rounded-md shadow-md object-cover  h-[400px] lg:h-[600px] mx-auto"
            />
          </motion.div>

          {/* Right - Cards */}
          <div className="space-y-4">
            {differences.map((item, index) => (
              <motion.div
                key={index}
                className="border-b border-r border-l mustard-border p-6 bg-transparent"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
              >
                {item.icon}
                <h3 className="card-title mb-2">{item.title}</h3>
                <p className="card-desc">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatMakesAECSDifferent;
