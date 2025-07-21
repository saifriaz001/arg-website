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

const GovernmentAdvisory = () => {
  return (
    <section className="section-layout">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-title">
          Government Advisory Services
        </h2>
        <p className= "paragraph-lg">
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
                <h4 className="subheading">
                  {item.title}
                </h4>
                <p className="paragraph-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 paragraph-sm-service">
          ARG's advisory services are tailored to help government clients navigate complexities,
          optimize resources, and achieve their strategic infrastructure development goals.
        </p>
      </div>
    </section>
  );
};

export default GovernmentAdvisory;
