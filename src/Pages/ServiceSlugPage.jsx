import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { fetchServices} from "../Redux/slices/serviceSlice"
import ReusableServiceSlugDetailPage from '../ReuseableComponents/ReusableServiceSlugDetailPage';

const ServiceSlugPage = () => {
  const dispatch = useDispatch()
  const {data , loading , error} = useSelector((state)=> state.services)

  useEffect(()=>{
   dispatch(fetchServices());
  },[])

  if (loading) return <div className="text-center py-10">Loading market details...</div>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ReusableServiceSlugDetailPage
      data={data}
      slugParamName="slug"
      backLink="/services"
    />
  );
};

export default ServiceSlugPage;
