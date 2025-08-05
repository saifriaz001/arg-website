import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import {fetchNews} from "../Redux/slices/newsSlice"
import NewsDetailPage from '../ReuseableComponents/NewsDetailsPage';

const NewsSlugPage = () => {
  const dispatch = useDispatch()
  const {data , loading , error} = useSelector((state)=> state.news)
  useEffect(()=>{
         dispatch(fetchNews());
        },[])
  // const [news, setNews] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const response = await getNews();
  //       setNews(response?.data || []);
  //       console.log("✅ News fetched successfully:", response?.data);
  //     } catch (error) {
  //       console.error('❌ Error fetching news data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchNews();
  // }, []);

  if (loading) return <div className="text-center py-10">Loading markets...</div>;
  if (error) return <p>Error: {error}</p>;

  return (
    <NewsDetailPage
      data={data}
      slugParamName="slug"
      backLink="/news"
    />
  );
};

export default NewsSlugPage;
