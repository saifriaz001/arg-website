import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectCarousel = ({ projects }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [projects.length]);

  if (!projects.length) return null;

  const project = projects[currentIndex];

  return (
    <div className="relative w-full h-80 overflow-hidden  shadow-md group">
        
        
      <Link to={`/projects/${project.slug}`} className="block h-full w-full">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover brightness-75 group-hover:scale-105 group-hover:brightness-100 transition duration-900 ease-in-out"
        />
        <div className="absolute bottom-0 left-0 w-full text-white   px-4 py-3">
          <h3 className="title">{project.title.toUpperCase()}</h3>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCarousel;
