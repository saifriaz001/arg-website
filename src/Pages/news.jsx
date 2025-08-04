import React, { useEffect, useState } from 'react';
import { getNews } from "../Admin/Endpoints/NewsAPI";
import PressReleasePage from '../ReuseableComponents/PressRelease';

const NewsPage = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMarkets = async () => {
            try {
                const response = await getNews();
                console.log("Markets data:", response?.data);
                setNews(response?.data || []);
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
        <PressReleasePage
            heading="Press Releases"
            paragraphLg="ARG partners with clients to take on their most complex challenges and pioneer innovative solutions that make a positive, lasting impact."
            paragraphSm="Across the globe, our teams push the limits of what’s possible and build legacies for generations to come – the world’s longest cable-stayed bridge, record-breaking sports events, the largest greenfield port development mega project, life-sustaining disaster recovery programs, and the tallest tower in the Western Hemisphere."
            data={news}
            prefixPath="news"
            filters={[
                { key: 'markets', label: 'Market' },
                { key: 'services', label: 'Services' },
                { key: 'types', label: 'Types' },
                { key: 'year', label: 'Year' },
            ]}
            defaultOption="All"

        />
    );
};

export default NewsPage;


