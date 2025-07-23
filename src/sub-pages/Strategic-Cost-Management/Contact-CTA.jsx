import { motion } from "framer-motion";
import handshakeImage from '../../assets/SubPages/Hand-Shake.png'; 
import PrimaryButton from '../reuseableComponents/PrimaryButton';

const CTACards = [
  {
    title: "Schedule a Strategic Consultation",
    description:
      "Meet with our senior leadership team to discuss your specific project challenges and explore tailored solutions.",
    button: "Book Now",
  },
  {
    title: "Request a Cost & Timeline Audit",
    description:
      "Get a complimentary assessment of your current project to identify potential efficiency improvements.",
    button: "Request Audit",
  },
];

const ContactCTA = () => {
  return (
    <section className="section-layout">
      <motion.div
        className="container-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src={handshakeImage}
            alt="Handshake"
            className="rounded-lg w-full h-[400px] lg:h-[700px] object-cover"
          />
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="heading-title">Let's Build Smarter Together</h2>
          <p className="paragraph-lg">
            Ready to experience the AECS difference? Our team of experts is standing by to help
            you achieve unprecedented certainty in your next institutional project.
          </p>

          {/* CTA Cards */}
          <div className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CTACards.map((card, idx) => (
                <motion.div
                  key={idx}
                  className="border mustard-border rounded-md px-4 py-4 flex flex-col justify-between"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.2 }}
                >
                  <div>
                    <h3 className="card-title mb-2">{card.title}</h3>
                    <p className="card-desc">{card.description}</p>
                  </div>
                  <PrimaryButton text={card.button} />
                </motion.div>
              ))}
            </div>

            {/* Capabilities Card */}
            <motion.div
              className="border mustard-border rounded-md p-4"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="card-title mb-2">Download Our Capabilities Deck</h3>
              <p className="card-desc mb-4">
                Explore our full service offering and review detailed case studies of our
                institutional work.
              </p>
              <PrimaryButton text="Download" />
            </motion.div>
          </div>

          {/* Contact Info */}
          <p className="mt-6 card-desc">
            Contact us:{" "}
            <span className="font-semibold">www.aecsresearchglobal.com</span> |{" "}
            <a href="mailto:info@aecsresearch.com" className="font-semibold underline">
              info@aecsresearch.com
            </a>{" "}
            | +1 (555) 123–4567
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
