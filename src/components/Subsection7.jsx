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
    <section className="w-[10/12] bg-white py-16 px-4 md:px-10 mx-auto">
    <div className='max-w-7xl mx-auto justify-center items-center '>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
          Connect with AECS Research Global
        </h2>
        <p className="text-subtle max-w-3xl mx-auto">
          AECS Research Global (ARG) invites inquiries from organizations seeking expert, reliable, and innovative solutions for their built environment projects. Whether you're starting a new development or exploring consultancy, we're here to help you succeed.
        </p>
      </div>

      <div className="  text-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {contacts.map((c, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            className="bg-[#fffaf2] rounded-lg shadow-md p-6 text-left hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-dark mb-2">{c.title}</h3>
            <p className="text-sm font-medium text-gray-700 mb-1">{c.org}</p>
            {c.contactPerson && (
              <p className="text-sm text-gray-600 mb-1">{c.contactPerson}</p>
            )}
            <p className="text-sm text-gray-600 mb-1 whitespace-pre-line">{c.address}</p>
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Phone:</span> {c.phone}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-medium">Email:</span> {c.email}
            </p>
            {c.extra && (
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-medium">Design Office:</span> {c.extra}
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
