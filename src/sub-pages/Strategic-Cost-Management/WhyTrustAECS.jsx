import { motion } from "framer-motion";
import infoImage from '../../assets/SubPages/WhyTrustAECS.png';

const reasons = [
    {
        number: "1",
        title: "20% Cost Reduction",
        description: "Our rigorous cost management protocols, detailed BOQ audits, and value engineering expertise eliminate unnecessary expenses while maintaining quality standards."
    },
    {
        number: "2",
        title: "Up to 40% Timeline Savings",
        description: "Milestone-based scheduling and lean process implementation accelerate project completion without compromising quality or compliance."
    },
    {
        number: "3",
        title: "Fully Integrated Project Intelligence",
        description: "Design, cost estimation, and project control all under one roof ensures seamless coordination and eliminates costly hand-off errors."
    }
];

const WhyTrustAECS = () => {
    return (
        <section className="mustard-section">
            <motion.div
                className="mustard-section-overlap"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="heading-title">Why Institutional Leaders Trust AECS</h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">

                    {/* Left Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img
                            src={infoImage}
                            alt="Team Collaboration"
                            className="rounded-lg w-full h-[400px] xl:h-full object-cover shadow-md"
                        />
                    </motion.div>

                    {/* Right Content */}
                    <div className="space-y-8">
                        {reasons.map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-10 card-box card-border-highlight"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                            >
                                <div className="info-number-box">{item.number}</div>
                                <div>
                                    <h3 className="card-title text-wrap">{item.title}</h3>
                                    <p className="card-desc">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default WhyTrustAECS;
