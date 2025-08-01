import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ReusableSlugDetailPage = ({ data, slugParamName = 'slug', defaultImage, backLink = '/' }) => {
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

  return (
    <section className="section-layout ">
      <div className="max-w-7xl mx-auto">
        <h1 className="heading-title">{item?.title}</h1>
        {/* Hero */}
        <div className="h-80 relative overflow-hidden mb-10">
          <img
            src={item.imageUrl || item.image || defaultImage}
            alt={item.title}
            className="w-full h-full object-cover brightness-75"
          />

        </div>

        <div  >
            <h1 className=" slug-heading">{item?.heading}</h1>
        </div>

        {/* Description */}
        <div >
          <p className="slug-Description">
            {item.description?.replace(/\\n/g, '\n') || 'No description provided.'}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReusableSlugDetailPage;
