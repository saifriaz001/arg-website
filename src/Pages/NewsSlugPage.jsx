import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getNews } from "../Admin/Endpoints/NewsAPI";
import NewsDetailPage from '../ReuseableComponents/NewsDetailsPage';

const NewsSlugPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await getNews();
        setNews(response?.data || []);
        console.log("✅ News fetched successfully:", response?.data);
      } catch (error) {
        console.error('❌ Error fetching news data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading news details...</div>;
  }

  return (
    <NewsDetailPage
      data={news}
      slugParamName="slug"
      backLink="/news"
    />
  );
};

export default NewsSlugPage;
