import React, { useEffect, useState } from 'react';
import { getProjects } from "../Admin/Endpoints/ProjectAPI";
import ReusableGridPage from '../ReuseableComponents/ReusableGridPage';

const ProjectPage = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMarkets = async () => {
            try {
                const response = await getProjects();
                console.log("Markets data:", response?.data);
                setProjects(response?.data || []);
            } catch (error) {
                console.error('Error fetching markets:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMarkets();
    }, []);

    if (loading) return <div className="text-center py-10">Loading markets...</div>;

    return (
        <ReusableGridPage
            heading="Projects"
            paragraphLg="ARG partners with clients to take on their most complex challenges and pioneer innovative solutions that make a positive, lasting impact."
            paragraphSm="Across the globe, our teams push the limits of what’s possible and build legacies for generations to come – the world’s longest cable-stayed bridge, record-breaking sports events, the largest greenfield port development mega project, life-sustaining disaster recovery programs, and the tallest tower in the Western Hemisphere."
            data={projects}
            prefixPath="projects"
            filters={[
                { key: 'market', label: 'Market' },
                { key: 'services', label: 'Service' },
                { key: 'country', label: 'Location' }
            ]}
            defaultOption="All projects"
        />
    );
};

export default ProjectPage;
