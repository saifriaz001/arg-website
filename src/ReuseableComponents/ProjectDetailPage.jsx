import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetailPage = ({ data, slugParamName = 'slug'} ) => {
  const params = useParams();
  const slug = params[slugParamName];

  const item =  data.find((entry) => entry.slug === slug);
  

  
  if (!item) {
    return <div className="text-center py-10">Loading project details...</div>;
  }

  const {
    title,
    heading,
    description,
    imageUrl,
    state,
    country,
    services,
    market
  } = item;
  return (
    <section className="section-layout">
      <div className="max-w-7xl mx-auto ">
        {/* Title and Location */}
        <div className="mb-6">
          <h1 className=" Project-title">{title}</h1>
          <p className="Project-location">{state}, {country}</p>
        </div>

        {/* Image */}
        {imageUrl && (
          <div className="w-full h-[400px] overflow-hidden mb-6 rounded-md shadow-md">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left: Heading + Description */}
          <div className="lg:w-2/3">
            {heading && (
              <p className="Project-heading">{heading}</p>
            )}
            {description && (
              <p className="Project-description">
                {description}
              </p>
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
                {services?.map((s, idx) => (
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
                {market?.map((m, idx) => (
                  <li className='' key={idx}><Link to={`/${"markets"}/${m.slug}`}>{m.title}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetailPage;
