import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import {fetchProjects} from "../Redux/slices/projectSlice"
import ProjectDetailPage from '../ReuseableComponents/ProjectDetailPage';

const ProjectSlug = () => {
    const dispatch = useDispatch()
    const {data , loading , error} = useSelector((state)=> state.projects)
    useEffect(()=>{
         dispatch(fetchProjects());
        },[])
        
  // const [markets, setMarkets] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchMarkets = async () => {
  //     try {
  //       const response = await getProjects();
  //       setMarkets(response?.data || []);
  //     } catch (error) {
  //       console.error('Error fetching market data:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchMarkets();
  // }, []);

  if (loading) return <div className="text-center py-10">Loading market details...</div>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ProjectDetailPage
      data={data}
      slugParamName="slug"
      backLink="/projects"
    />
  );
};

export default ProjectSlug;
