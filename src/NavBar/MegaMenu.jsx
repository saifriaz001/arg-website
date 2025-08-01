import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 👈 needed for routing
import NavButton from '../ReuseableComponents/NavButton';
import ButtonWithArrow from '../ReuseableComponents/ButtonWithArrow';
import { getMarkets } from "../Admin/Endpoints/MarketsAPI";
import { getServices } from "../Admin/Endpoints/ServicesAPI";
import { getProjects } from "../Admin/Endpoints/ProjectArrayAPI";

const MegaMenu = () => {
  const [markets, setMarkets] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);

  const shuffleArrayPreserveLastFirst = (arr) => {
  if (!arr || arr.length === 0) return [];

  const lastItem = arr[arr.length - 1]; // 👈 Get the last item
  const rest = arr.slice(0, -1);        // 👈 All except the last
  const shuffledRest = [...rest].sort(() => Math.random() - 0.5); // 👈 Shuffle rest

  return [lastItem, ...shuffledRest];   // 👈 Return with last item first
};

  // Randomize / Rotate helper
  const shuffleArray = (arr) => [...arr].sort(() => Math.random() - 0.5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const marketRes = await getMarkets();
        const serviceRes = await getServices();
        const projectRes = await getProjects();

        const shuffledMarkets = shuffleArrayPreserveLastFirst(marketRes?.data || []);
        const shuffledServices = shuffleArrayPreserveLastFirst(serviceRes?.data || []);

        setMarkets(shuffledMarkets.slice(0, 6));
        setServices(shuffledServices.slice(0, 6));
        setProjects(projectRes?.data?.projects || []);
      } catch (err) {
        console.error("❌ Error fetching menu data:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="nav-section-background">
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-10 px-8 py-8">
        {/* Info Block */}
        <div>
          <h2 className="text-xl font-semibold mb-2">
            The world’s trusted infrastructure consulting firm
          </h2>
          <p className="text-sm mb-4">
            We partner with our clients to deliver a better world
          </p>
          
          <NavButton>Download factsheet →</NavButton>
        </div>

        {/* Markets */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Markets</h3>
            <ul className="space-y-4">
              {markets.map((market) => (
                <li key={market._id || market.id} className="dropdown-link">
                  <Link to={`/markets/${market.slug}`}>
                    {market.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <NavButton className="mt-4">
            <Link to="/markets">View all markets →</Link>
          </NavButton>
        </div>

        {/* Services */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service._id || service.id} className="dropdown-link">
                  <Link to={`/servicespage/${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <NavButton className="mt-4">
            <Link to="/servicespage">View all services →</Link>
          </NavButton>
        </div>

        {/* Projects */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-white text-lg font-semibold mb-2">Projects</h3>
            <ul className="space-y-4">
              {projects.slice(0, 5).map((project, index) => (
                <li key={project._id || index} className="dropdown-link">
                  <Link to={`/projects/${project.slug}`}>
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <NavButton className="mt-4">
            <Link to="/projects">View all Projects →</Link>
          </NavButton>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
