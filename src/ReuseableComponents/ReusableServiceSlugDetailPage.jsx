import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ContactUsForm from './ContactUsForm'; // Adjust path if needed
import ProjectCarousel from './ProjectCarousel';
import CareerCard from './CareerCard';
import NewsListSection from './NewsListSection';
import ArchitectureEngineering from "../components/ArchitectureEngineering"
import StrategicCostManagement from '../components/StrategicCostManagement';
import EPCAdvisory from '../components/EPCAdvisory';
import ProjectManagement from '../components/ProjectManagement';

export const servicesList = [
  {
    title: "Strategic Cost Management",
    item: <StrategicCostManagement />
  },
  {
    title: "Strategic Project Management",
    item: <ProjectManagement />
  },
  {
    title: "Architecture Engineering & Design",
    item: <ArchitectureEngineering />
  },
  {
    title: "EPC Advisory",
    item: <EPCAdvisory />
  }
];


const ReusableServiceSlugDetailPage = ({
  data,
  slugParamName = 'slug',
  defaultImage,
  backLink = '/'
}) => {

  const cards =[
    {
      title:"strategic"
    }
  ]


  const params = useParams();
  const slug = params[slugParamName];

  const item = data.find((entry) => entry.slug === slug);

  if (!item) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-semibold">Item not found</h1>
        <Link to={backLink} className="text-blue-500 underline mt-4 block">Go back</Link>
      </div>
    );
  }

  const matchedService = item
    ? servicesList.find((service) => service.title === item.title)
    : null;

  return (
    <div>
      {/* HEADER */}
      <section className="section-layout">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-title">{item?.title}</h1>
        </div>
      </section>

      {/* IMAGE */}
      <div className=" h-96 overflow-hidden  bg-[#FFFDFA]">
        <img
          src={item.imageUrl || defaultImage}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT AREA: DETAILS LEFT, FORM RIGHT */}
      <section className="section-layout">
        <div className="mt-10 max-w-7xl mx-auto lg:flex lg:gap-10">
          {/* LEFT: DETAILS */}
          <div className="lg:w-2/3 w-full space-y-10">
            {item.mainHeading && (
              <div>
                <h2 className="Project-heading">{item.mainHeading}</h2>
                {item.mainDescription && (
                  <p className="Project-description">{item.mainDescription}</p>
                )}
              </div>
            )}

            {(item.secondHeading || item.secondDescription || item.descriptionImageUrl) && (
              <div className="space-y-4">
                {item.secondHeading && (
                  <h2 className="Project-heading">{item.secondHeading}</h2>
                )}
                {item.secondDescription && (
                  <p className="Project-description">{item.secondDescription}</p>
                )}
                {item.descriptionImageUrl && (
                  <img
                    src={item.descriptionImageUrl}
                    alt="Second Section Image"
                    className="w-full h-72 object-cover rounded-md"
                  />
                )}
              </div>
            )}

            {(item.highlightsHeading || item.highlightsDescriptions?.length > 0 || item.highlightsDescriptionImageUrl) && (
              <div className="space-y-4">
                {item.highlightsHeading && (
                  <h2 className="Project-heading">{item.highlightsHeading}</h2>
                )}

                {item.highlightsDescriptions?.length > 0 && (
                  <ul className="list-disc pl-5 Project-description">
                    {item.highlightsDescriptions.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                )}

                {item.highlightsDescriptionImageUrl && (
                  <img
                    src={item.highlightsDescriptionImageUrl}
                    alt="Highlights Section Image"
                    className="w-full h-72 object-cover  rounded-md"
                  />
                )}
              </div>
            )}
          </div>

          {/* RIGHT: CONTACT FORM */}
          <div className="lg:w-1/3 w-full mt-10 lg:mt-0">

          <div className=''>
            {matchedService && matchedService.item}
          </div>
          <div className=' '>
            <NewsListSection   items ={item?.news || []} />
          </div>
            <div className="mb-10">
              <ContactUsForm />
            </div>
            <div className="mb-10">
              <CareerCard/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReusableServiceSlugDetailPage;
