import React from 'react';
import Skyscrapper from '../assets/Video_Ready_Skyscraper_Timelapse.mp4';

const Herosection = () => {
  return (
    <div className="w-[10/12]  py-10  ">
      <div className="max-w-[1330px] mx-auto space-y-4  flex flex-col  lg:flex-row items-center justify-center px-4 xl:px-5 ">
        
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="nourd text-4xl md:text-5xl text-dark font-bold mb-4">
            AECS Research Global
          </h1>
          <p className="nourd text-subtle text-lg  max-w-xl mx-auto lg:mx-0">
            Architecture, Engineering, and Construction for <br />
            <span className="font-semibold nourd text-dark">People, Planet, and Profits</span>
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-lg shadow-lg">
          <video
            src={Skyscrapper}
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
