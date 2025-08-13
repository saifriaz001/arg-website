import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 👈 needed for routing
import NavButton from '../ReuseableComponents/NavButton';
import ButtonWithArrow from '../ReuseableComponents/ButtonWithArrow';
import { useDispatch , useSelector } from 'react-redux';
import { fetchMarkets} from "../Redux/slices/marketSlice"
import {fetchProjectsArray} from "../Redux/slices/projectArraySlice"
import {fetchServices} from "../Redux/slices/serviceSlice"


const MegaMenu = () => {
  const dispatch = useDispatch();

  // ⬇️ Grab data from Redux
  const { data: marketData } = useSelector((state) => state.markets);
  const { data: serviceData } = useSelector((state) => state.services);
  const { data: projectData } = useSelector((state) => state.projectArray); // or projects

  const [markets, setMarkets] = useState([]);
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);

  const shuffleArrayPreserveLastFirst = (arr) => {
    if (!arr || arr.length === 0) return [];
    const lastItem = arr[arr.length - 1];
    const rest = arr.slice(0, -1);
    const shuffledRest = [...rest].sort(() => Math.random() - 0.5);
    return [lastItem, ...shuffledRest];
  };

  useEffect(() => {
    // Only dispatch if not already loaded
    dispatch(fetchMarkets());
    dispatch(fetchServices());
    dispatch(fetchProjectsArray());
  }, [dispatch]);

  useEffect(() => {
    // once Redux provides data, process it
    if (marketData.length) {
      const shuffledMarkets = shuffleArrayPreserveLastFirst(marketData);
      setMarkets(shuffledMarkets.slice(0, 6));
    }

    if (serviceData.length) {
      const shuffledServices = shuffleArrayPreserveLastFirst(serviceData);
      setServices(shuffledServices.slice(0, 6));
    }

    if (projectData.length) {
      setProjects(projectData);
    }
  }, [marketData, serviceData, projectData]);

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
            <h3 className="mega-menu-heading">Markets</h3>
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
            <h3 className="mega-menu-heading">Services</h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service._id || service.id} className="dropdown-link">
                  <Link to={`/services/${service.slug}`}>
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <NavButton className="mt-4">
            <Link to="/services">View all services →</Link>
          </NavButton>
        </div>

        {/* Projects */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="mega-menu-heading">Projects</h3>
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
