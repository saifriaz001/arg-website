import React from 'react';

const SubSection1 = () => {
  return (
    <section className="w-full bg-cream py-10 px-6 md:px-16">
      <div className="max-w-5xl mx-auto flex items-start gap-4">
        {/* Left Border Line */}
        <div className="w-1 bg-[#D87026] rounded-sm hidden sm:block"></div>

        {/* Text Content */}
        <p className="text-subtle text-lg leading-relaxed font-normal">
          <span className="text-dark nourd font-medium">"AECS Research Global (ARG)</span> is a dynamic and forward–thinking global consultancy, positioned at the vanguard of engineering, project management, and sustainable development within the intricate realm of the built environment."
        </p>
      </div>
    </section>
  );
};

export default SubSection1;
