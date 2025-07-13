import React from 'react';
import { FaUsers, FaGlobe, FaChartLine, FaBullseye } from 'react-icons/fa';

const SubSection3 = () => {
  return (
    <section className="bg-cream py-16 px-4 md:px-10">
      <div className="w-10/12 mx-auto text-dark space-y-12">

        {/* Section Heading */}
        <div>
          <h2 className="flex items-center gap-3 text-3xl md:text-4xl font-bold tracking-wide mb-4">
            <FaBullseye className="text-primary" />
            Our Guiding Principles
          </h2>
          <p className="text-subtle text-base max-w-4xl leading-relaxed">
            AECS Research Global’s operational philosophy and strategic direction are anchored by a clear mission and a set of enduring core values that define its corporate character and guide its interactions with clients, partners, and communities.
          </p>
        </div>

        {/* Mission Statement */}
        <div>
          <h3 className="text-2xl font-semibold mb-2 tracking-wide">Mission Statement</h3>
          <p className="text-subtle text-base leading-relaxed mb-4">
            Our mission is to deliver unparalleled excellence in project management and engineering by creating solutions that are equitable for <strong>People</strong>, restorative for the <strong>Planet</strong>, and profitable for our clients. We achieve this through unwavering professionalism, synergistic teamwork, and a profound commitment to sustainable and ethical practices.
          </p>
          <p className="font-semibold text-primary text-sm uppercase tracking-wider">Core Values: The Foundation of Our 3P Commitment</p>
        </div>

        {/* 3P Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* For People */}
          <div className="group p-6 bg-[#fffaf2] rounded-md shadow-sm hover:shadow-md transition">
            <FaUsers className="text-primary text-3xl mb-3 transition-transform duration-300 group-hover:scale-110" />
            <h4 className="text-lg font-semibold text-dark mb-1">
              For People <span className="block text-sm text-subtle font-normal">(Social Equity)</span>
            </h4>
            <ul className="text-base list-disc list-inside text-subtle mt-2 space-y-1">
              <li><strong>Client–Centricity:</strong> Dedicated to client success and community benefits.</li>
              <li><strong>Teamwork & Excellence:</strong> Collaborative environment, safety, and professional growth.</li>
            </ul>
          </div>

          {/* For the Planet */}
          <div className="group p-6 bg-[#fffaf2] rounded-md shadow-sm hover:shadow-md transition">
            <FaGlobe className="text-primary text-3xl mb-3 transition-transform duration-300 group-hover:scale-110" />
            <h4 className="text-lg font-semibold text-dark mb-1">
              For the Planet <span className="block text-sm text-subtle font-normal">(Environmental Responsibility)</span>
            </h4>
            <ul className="text-base list-disc list-inside text-subtle mt-2 space-y-1">
              <li><strong>Sustainability & Contribution:</strong> Embed environmental responsibility, promote green practices.</li>
            </ul>
          </div>

          {/* For Profits */}
          <div className="group p-6 bg-[#fffaf2] rounded-md shadow-sm hover:shadow-md transition">
            <FaChartLine className="text-primary text-3xl mb-3 transition-transform duration-300 group-hover:scale-110" />
            <h4 className="text-lg font-semibold text-dark mb-1">
              For Profits <span className="block text-sm text-subtle font-normal">(Economic Viability)</span>
            </h4>
            <ul className="text-base list-disc list-inside text-subtle mt-2 space-y-1">
              <li><strong>Integrity & Professionalism:</strong> Highest standards, build trust, ensure financial health.</li>
              <li><strong>Innovation & Growth:</strong> Invest in research, drive efficiency, maximize value.</li>
            </ul>
          </div>
        </div>

        {/* Vision Statement */}
        <div>
          <h3 className="relative inline-block text-2xl font-semibold mb-3">
            <span className="absolute inset-0 bg-primary/10 -z-10 rounded-md px-2 py-1" />
            Vision for the Future
          </h3>
          <p className="text-subtle text-base leading-relaxed max-w-5xl">
            ARG envisions itself as a globally recognized leader in providing integrated, cutting-edge solutions for the built environment. The firm aspires to be at the forefront of pioneering sustainable development practices and driving innovative research that addresses the critical challenges of our time, thereby shaping a more resilient and resource–efficient future.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SubSection3;
