import React, { useEffect, useState } from 'react';
import { useDispatch , useSelector } from 'react-redux';
import { fetchMarkets } from '../Redux/slices/marketSlice';
import ReusableGridPage from '../ReuseableComponents/ReusableGridPage';

const MarketPage = () => {


  const dispatch = useDispatch()
  const {data , loading , error} = useSelector((state)=> state.markets)

  useEffect(()=>{
   dispatch(fetchMarkets());
  },[])



  if (loading) return <div className="text-center py-10">Loading markets...</div>;
  if (error) return <p>Error: {error}</p>;
  
  return (

    <ReusableGridPage
      heading="Markets"
      paragraphLg="ARG partners with clients to take on their most complex challenges and pioneer innovative solutions that make a positive, lasting impact."
      paragraphSm="Across the globe, our teams push the limits of what’s possible and build legacies for generations to come – the world’s longest cable-stayed bridge, record-breaking sports events, the largest greenfield port development mega project, life-sustaining disaster recovery programs, and the tallest tower in the Western Hemisphere."
      data={data}
      prefixPath="markets"
      filters={[
                { key: 'title', label: 'Select a market ' }
            ]}
      defaultOption="All Markets"

    />
  );
};

export default MarketPage;


