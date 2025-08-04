import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMarkets } from "../Admin/Endpoints/MarketsAPI";
import ReusableSlugDetailPage from '../ReuseableComponents/ReusableSlugDetailPage';

const MarketSlugPage = () => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarkets = async () => {
      try {
        const response = await getMarkets();
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
    <ReusableSlugDetailPage
      data={markets}
      slugParamName="slug"
      backLink="/markets"
    />
  );
};

export default MarketSlugPage;
