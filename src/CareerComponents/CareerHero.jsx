import React from "react";

const CareerHero = () => (
  <div className="hero-career">
    <video autoPlay loop muted playsInline className="hero-career-video">
      <source src="/videos/careers-bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="hero-career-content">
      <p className="career-title">Careers</p>
      <div className="career-headline">Work that moves the world forward.</div>
      <div className="career-description">
        Be part of bold, meaningful projects that transform cities, elevate
        experiences, and leave a legacy of positive change.
      </div>
    </div>
  </div>
);

export default CareerHero;
