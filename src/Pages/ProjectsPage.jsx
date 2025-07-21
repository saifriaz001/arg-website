// src/Pages/Projects.jsx
import React, {useState} from 'react';
import './Section.css';
import ServiceDropdown from '../ReuseableComponents/ServiceDropDown';
import image1 from "../assets/Ballabhgarh.png"
import image2 from "../assets/Vrinda City1.png"
import image3 from "../assets/NRIlakecity.avif"
import image4 from "../assets/SmartIndustrialPark.png"
import image5 from "../assets/RajaNaharSinghCricket.png"
import image6 from "../assets/100BeddedPrince.avif"
import image7 from "../assets/AliRezaShoppinMall.png"
import image8 from "../assets/SaudiAerospace.png"
import image9 from "../assets/AdministrationBuilding.avif"

const projects = [
  { title: 'Raja Nahar Singh Cricket Stadium', img: image5 },
  { title: 'Smart Industrial Park, Padora', img: image4 },
  { title: 'NRI Lake City', img: image3 },
  { title: 'Vrinda City', img: image2 },
  { title: 'Ballabhgarh Bus Terminal Redevelopment', img: image1 },
  { title: 'Administration Building, Najran University', img: image9 },
  { title: '100 Bedded Prince Mansour Military Hospital', img: image6 },
  { title: 'Ali Reza Shopping Mall', img: image7 },
  { title: 'Saudi Aerospace Engineering Industries', img: image8 },
];

const Projects = () => {

  const [selected, setSelected] = useState('All Projects');
  return (
    <section className="section-layout bg-[#FFFDFA] ">
      <div className="max-w-7xl mx-auto">
        <h1 className="heading-title">Projects</h1>

        <div className="paragraph-lg">
          ARG partners with clients to take on their most complex challenges and pioneer
          innovative solutions that make a positive, lasting impact.
        </div>
        <p className="paragraph-sm">
          Across the globe, our teams push the limits of what’s possible and build legacies for generations to come – the world’s longest cable-stayed bridge, record-breaking sports events, the largest greenfield port development mega project, life-sustaining disaster recovery programs, and the tallest tower in the Western Hemisphere.
        </p>

        <ServiceDropdown
          services={projects}
          selected={selected}
          setSelected={setSelected}
          text={"Filter projects by:"}
          option={"All Projects"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1">
          {projects.filter((s) => selected === 'All Projects' || s.title === selected)
          .map((proj, idx) => (
            <div
              key={idx}
              className="relative group h-64 overflow-hidden  shadow-md"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-full object-cover brightness-50 transform group-hover:brightness-100 transition duration-500 ease-in-out group-hover:scale-105 "
              />
              <div className="absolute bottom-0 left-0 right-0  p-3 text-white">
                <h4 className="text-sm md:text-xs uppercase lg:text-base sm:text-base font-semibold">
                  {proj.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
