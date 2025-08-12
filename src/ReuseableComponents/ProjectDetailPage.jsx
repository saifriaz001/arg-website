import React from 'react';
import { useParams, Link } from 'react-router-dom';
import CareerCard from './CareerCard';
import NewsListSection from './NewsListSection';
import ContactUsForm from './ContactUsForm';

const ProjectDetailPage = ({ data, slugParamName = 'slug'} ) => {
  const params = useParams();
  const slug = params[slugParamName];

  const item =  data.find((entry) => entry.slug === slug);
  

  
  if (!item) {
    return <div className="text-center py-10">Loading project details...</div>;
  }


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
          src={item.imageUrl }
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>
    <section className="section-layout">
      <div className=" mt-10 max-w-7xl mx-auto  lg:flex lg:gap-10 ">
        {/* Title and Location */}
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

          {/* Right: Services + Markets */}
          <div className="lg:w-1/3 space-y-8">
            {/* Services */}
            <div>
              <h3 className="Project-service">
                Services
              </h3>
              <ul className="mt-2 list-disc list-inside Project-service-description">
                {item?.services?.map((s, idx) => (
                  <li className='' key={idx}><Link to={`/${"services"}/${s.slug}`}>{s.title}</Link></li>
                ))}
              </ul>
            </div>

            {/* Markets */}
            <div>
              <h3 className="Project-service">
                Markets
              </h3>
              <ul className="mt-2 list-disc list-inside Project-service-description">
                {item?.market?.map((m, idx) => (
                  <li className='' key={idx}><Link to={`/${"markets"}/${m.slug}`}>{m.title}</Link></li>
                ))}
              </ul>
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

export default ProjectDetailPage;
