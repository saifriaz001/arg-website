import React from 'react';
import { motion } from 'framer-motion';

const contacts = [
  {
    title: "Global Inquiries & KSA Operations",
    org: "AECS Research Global",
    contactPerson: "Engr. Ch. Basharatullah Khan (CEO/Managing Director)",
    address: "Prince Sultan Street, Al Naeem District, Jeddah, Kingdom of Saudi Arabia",
    phone: "+966 569692205",
    email: "contact@arg-in.com | info@aecsresearchglobal.com"
  },
  {
    title: "UAE Operations",
    org: "AECS Research Global",
    address: "Office No. 1265, Tamani Arts Center, Business Bay, Dubai, U.A.E.",
    phone: "+971 561333875",
    email: "contact@arg-in.com"
  },
  {
    title: "India Operations",
    org: "AECS Research Global – India",
    address: `265–E, Gulmohar Avenue, Tikona Park, Jamia Nagar, Okhla, New Delhi – 110 025`,
    phone: "+91 9873198259",
    email: "contact@arg-in.com",
    extra: `Design Office (ARG Technocrats): Pocket No. 2, Plot No. 66, 3rd Floor, Jasola Vihar, New Delhi – 110 025`
  }
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

const Subsection7 = () => {
  return (
    <section className="mt-20">
      <div>
        <h2 className="heading-title">Connect with AECS Research Global</h2>
        <p className="paragraph-lg">
          AECS Research Global (ARG) invites inquiries from organizations seeking expert, reliable, and innovative solutions for their built environment projects. Whether you're starting a new development or exploring consultancy, we're here to help you succeed.
        </p>

        <div className="text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          {contacts.map((c, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.3 }}
              className="contact-card"
            >
              <h3 className="contact-title">{c.title}</h3>
              <p className="contact-org">{c.org}</p>
              {c.contactPerson && <p className="contact-detail">{c.contactPerson}</p>}
              <p className="contact-detail whitespace-pre-line">{c.address}</p>
              <p className="contact-detail">
                <span className="contact-label">Phone:</span> {c.phone}
              </p>
              <p className="contact-detail">
                <span className="contact-label">Email:</span> {c.email}
              </p>
              {c.extra && (
                <p className="contact-extra">
                  <span className="contact-label">Design Office:</span> {c.extra}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Subsection7;
