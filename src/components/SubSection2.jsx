import React from 'react';
import SustainableVideo from '../assets/Sustainable_Architecture_Video_Generated.mp4';

const SubSection2 = () => {
  return (
    <section className="bg-cream px-6 py-12 md:px-16">
      <div className=" w-10/12 mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-xl sm:text-4xl font-bold text-dark leading-snug mb-6">
            A Vision for Integrated Value: <br />
            <span className="text-primary">People, Planet, Profits</span>
          </h2>
          <div className="border-l-4 border-primary pl-4 mb-6 text-subtle">
            AECS Research Global (ARG) stands at the forefront of the built environment, pioneering an integrated approach that balances human–centric design (<strong>People</strong>), environmental stewardship (<strong>Planet</strong>), and economic viability (<strong>Profits</strong>).
          </div>
          <p className="text-subtle text-base leading-relaxed">
            As a dynamic global consultancy, ARG leverages a rich legacy of experience to deliver comprehensive solutions in engineering, project management, and strategic advisory. Our philosophy is rooted in the conviction that true success is achieved when projects create value for all stakeholders—enhancing communities, protecting our natural world, and delivering strong financial returns.
          </p>
        </div>

        {/* Right Responsive Video */}
        <div className="rounded-lg hidden sm:block md:hidden lg:hidden xl:block overflow-hidden shadow-md w-full">
          <video
            src={SustainableVideo}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto rounded"
          />
        </div>
      </div>
    </section>
  );
};

export default SubSection2;
