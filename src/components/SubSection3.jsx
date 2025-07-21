import React from 'react';
import { FaUsers, FaGlobe, FaChartLine, FaBullseye } from 'react-icons/fa';


const valuesData = [
  {
    icon: <FaUsers />,
    title: "For People",
    subtitle: "(Social Equity)",
    items: [
      `<strong class="strong">Client–Centricity:</strong> Dedicated to client success and community benefits.`,
      "<strong>Teamwork & Excellence:</strong> Collaborative environment, safety, and professional growth.",
    ],
  },
  {
    icon: <FaGlobe />,
    title: "For the Planet",
    subtitle: "(Environmental Responsibility)",
    items: [
      `<strong  class="strong" >Sustainability & Contribution:</strong> Embed environmental responsibility, promote green practices.`,
    ],
  },
  {
    icon: <FaChartLine />,
    title: "For Profits",
    subtitle: "(Economic Viability)",
    items: [
      `<strong  class="strong" >Integrity & Professionalism:</strong> Highest standards, build trust, ensure financial health.`,
      `<strong  class="strong" >Innovation & Growth:</strong> Invest in research, drive efficiency, maximize value.`,
    ],
  },
];

const SubSection3 = () => {
  return (
    <section className="">
      <div className="">

        {/* Section Heading */}
        <div>
          <h2 className="heading-title flex flex-row gap-x-4">
            Our Guiding Principles
          </h2>
          <p className="paragraph-lg  ">
            AECS Research Global’s operational philosophy and strategic direction are anchored by a clear mission and a set of enduring core values that define its corporate character and guide its interactions with clients, partners, and communities.
          </p>
        </div>

        {/* Mission Statement */}
        <div>
          <h3 className="subheading">Mission Statement</h3>
          <p className="paragraph-sm">
            Our mission is to deliver unparalleled excellence in project management and engineering by creating solutions that are equitable for <strong className='strong'>People</strong>, restorative for the <strong className='strong'>Planet</strong>, and profitable for our clients. We achieve this through unwavering professionalism, synergistic teamwork, and a profound commitment to sustainable and ethical practices.
          </p>
          <p className="subheading">Core Values: The Foundation of Our 3P Commitment</p>
        </div>

        {/* 3P Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesData.map((card, idx) => (
            <div key={idx} className="value-card group">
              <div className="icon-wrapper group-hover">{card.icon}</div>
              <div>
              <div className="card-title text-2xl font-bold">
                {card.title}
              </div>
              <div className="subtitle">{card.subtitle}</div>
              </div>
              <ul className="card-list">
                {card.items.map((point, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div>
          <h3 className=" subheading mt-5 ">
            <span />
            Vision for the Future
          </h3>
          <p className="paragraph-sm">
            ARG envisions itself as a globally recognized leader in providing integrated, cutting-edge solutions for the built environment. The firm aspires to be at the forefront of pioneering sustainable development practices and driving innovative research that addresses the critical challenges of our time, thereby shaping a more resilient and resource–efficient future.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SubSection3;
