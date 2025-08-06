import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { fetchMarkets } from '../Redux/slices/marketSlice';
import ReusableSlugDetailPage from '../ReuseableComponents/ReusableSlugDetailPage';

const MarketSlugPage = () => {
  const dispatch = useDispatch()
  const {data , loading , error} = useSelector((state)=> state.markets)

  useEffect(()=>{
   dispatch(fetchMarkets());
  },[])

  if (loading) return <div className="text-center py-10">Loading market details...</div>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ReusableSlugDetailPage
      data={data}
      slugParamName="slug"
      backLink="/markets"
    />
  );
};

export default MarketSlugPage;
