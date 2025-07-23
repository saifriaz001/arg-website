import { motion } from "framer-motion";
import {
  PiCalculatorBold,
  PiClockBold,
  PiPencilSimpleLineBold,
  PiHandshakeBold,
} from "react-icons/pi";

const services = [
  {
    icon: <PiCalculatorBold className="service-icon" />,
    title: "Strategic Cost Management",
    description:
      "Advanced cost modeling, value engineering, procurement optimization, and continuous monitoring systems that keep projects within budget constraints while maximizing value.",
  },
  {
    icon: <PiClockBold className="service-icon" />,
    title: "Timeline Control & Project Monitoring",
    description:
      "Proprietary milestone tracking, critical path management, and real-time progress dashboards that identify potential delays before they impact schedules.",
  },
  {
    icon: <PiPencilSimpleLineBold className="service-icon" />,
    title: "Design & Engineering Excellence",
    description:
      "Multidisciplinary design coordination, BIM implementation, sustainability integration, and technical innovation that enhances project functionality and longevity.",
  },
  {
    icon: <PiHandshakeBold className="service-icon" />,
    title: "Turnkey PPP Advisory",
    description:
      "Comprehensive guidance for public–private partnerships, including financial structuring, risk allocation, procurement strategy, and contract administration.",
  },
];

const ServicesSection = () => {
  return (
    <section className="mustard-section">
      <div className="mustard-section-overlap">
        <h2 className="heading-title">Services that Deliver Results</h2>
        <p className="paragraph-lg">
          Our comprehensive service portfolio addresses every aspect of institutional project delivery, ensuring seamless execution from concept to completion.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            > <div className="flex flex-row xl:flex-col space-x-1  ">
              <div>{service.icon}</div>
              <div><h3 className="card-title">{service.title}</h3></div>
              </div>
              <p className="card-desc">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
