import React, { useEffect, useState } from 'react';
import { getMarkets } from "../Admin/Endpoints/MarketsAPI";
import ReusableGridPage from '../ReuseableComponents/ReusableGridPage';

const MarketPage = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await getMarkets();
        console.log("Markets data:", response?.data);
        setMarkets(response?.data || []);
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
      heading="Markets"
      paragraphLg="ARG partners with clients to take on their most complex challenges and pioneer innovative solutions that make a positive, lasting impact."
      paragraphSm="Across the globe, our teams push the limits of what’s possible and build legacies for generations to come – the world’s longest cable-stayed bridge, record-breaking sports events, the largest greenfield port development mega project, life-sustaining disaster recovery programs, and the tallest tower in the Western Hemisphere."
      data={markets}
      prefixPath="markets"
      filters={[
                { key: 'title', label: 'Market' }
            ]}
      defaultOption="All Markets"

    />
  );
};

export default MarketPage;


