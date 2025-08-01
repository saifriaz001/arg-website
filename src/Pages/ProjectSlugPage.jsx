import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjects } from "../Admin/Endpoints/ProjectAPI";
import ProjectDetailPage from '../ReuseableComponents/ProjectDetailPage';

const ProjectSlug = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await getProjects();
        setMarkets(response?.data || []);
      } catch (error) {
        console.error('Error fetching market data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMarkets();
  }, []);

  if (loading) return <div className="text-center py-10">Loading market details...</div>;

  return (
    <ProjectDetailPage
      data={markets}
      slugParamName="slug"
      backLink="/projects"
    />
  );
};

export default ProjectSlug;
