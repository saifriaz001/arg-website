import React from "react";
import image1 from "../assets/SaudiArabianMinistries.avif"
import image2 from "../assets/IndianGovernmentBodies.png"
import image3 from "../assets/SpecializedAdvisoryExpertise.avif"
const governmentServices = [
  {
    title: "Saudi Arabian Ministries",
    description:
      "Our founder's distinguished record includes collaborations with the Ministry of Defence, Ministry of Health, National Guard, and Ministry of Higher Education in the Kingdom of Saudi Arabia.",
    image: image1, // Replace with actual path or use import
  },
  {
    title: "Indian Government Bodies",
    description:
      "ARG has successfully executed numerous projects for governmental entities including the Municipal Corporation Faridabad, Industrial Infrastructure Development Corporation (IIDC), and the Ministry of Housing & Poverty Alleviation.",
    image: image2,
  },
  {
    title: "Specialized Advisory Expertise",
    description:
      "Our deep engagement with the public sector has endowed ARG with a nuanced understanding of governmental requirements, stringent compliance protocols, and unique challenges associated with delivering projects of national importance.",
    image: image3,
  },
];

const Services5 = () => {
  return (
    <section className="w-full px-4 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl  font-semibold nourd text-dark  text-center mb-2">
          Government Advisory Services
        </h2>
        <p className= "text-subtle  mb-10 max-w-7xl text-center text-base md:text-lg leading-relaxed">
          ARG possesses proven and extensive experience in advising and managing large-scale
          government construction projects across multiple regions.
        </p>

        <div className="grid gap-10">
          {governmentServices.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-start gap-6 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-1/3 h-56 object-cover rounded-lg shadow-md"
              />
              <div className="flex-1">
                <h4 className="nourd   text-dark nourd    text-xl md:text-2xl font-semibold  mb-2">
                  {item.title}
                </h4>
                <p className="nourd text-subtle text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10  text-sm md:text-base leading-relaxed nourd text-subtle  space-y-4">
          ARG's advisory services are tailored to help government clients navigate complexities,
          optimize resources, and achieve their strategic infrastructure development goals.
        </p>
      </div>
    </section>
  );
};

export default Services5;
