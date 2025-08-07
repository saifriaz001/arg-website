import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

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
    <div>
      <section className="section-layout ">
        <div className="max-w-7xl mx-auto">
          <h1 className="heading-title">{item?.title}</h1>
        </div>
      </section>
      <div className="h-80  overflow-hidden mb-10 bg-[#FFFDFA]">
        <img
          src={item.imageUrl || item.image || defaultImage}
          alt={item.title}
          className="w-full h-full object-cover brightness-100"
        />
      </div>
      <section className="section-layout ">
        <div className="max-w-7xl mx-auto">
          <div  >
            <h1 className=" slug-heading">{item?.heading}</h1>
          </div>

          {/* Description */}
          <div className='prose prose-lg' >
            <p className="slug-Description prose prose-lg">
              
              {item.description?.replace(/\\n/g, '\n') || 'No description provided.'}
            </p>
            <div className='prose prose-lg slug-Description '>
              <ReactMarkdown>{item.description || 'No description provided.'}</ReactMarkdown>
            </div>
            <ul className="list-disc pl-5">
  {item?.description?.split(/[\.\n]/).map(str => str.trim()).filter(Boolean).map((line, i) => (
    <li key={i}>{line}</li>
  ))}
</ul>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReusableSlugDetailPage;
 