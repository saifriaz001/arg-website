import { motion } from "framer-motion";

const cards = [
  {
    title: "Cost Overruns",
    description: "Projects frequently exceed budgets by 28–40% due to inaccurate initial forecasting, inadequate contingency planning, and insufficient cost controls during execution."
  },
  {
    title: "Timeline Delays",
    description: "Poor integration between design, engineering, and construction teams creates communication gaps, resulting in missed milestones and extended project timelines by an average of 45%."
  },
  {
    title: "Resource Waste",
    description: "Design inefficiencies and uncoordinated workflows lead to rework, material waste, and unnecessary expenditure, reducing potential returns on investment."
  }
];

const ChallengeSection = () => {
  return (
    <section className="section-layout">
      <div className="container-7xl text-center mb-10">
        <h2 className="heading-title">The Institutional Project Delivery Challenge</h2>
        <p className="paragraph-lg">
          When managing large-scale institutional projects, predictability is paramount. Yet many firms struggle with the same critical issues that compromise project success:
        </p>
      </div>

      <div className="container-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="card-box card-border-highlight"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChallengeSection;
