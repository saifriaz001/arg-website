import React from 'react'
import  CreateServiceForm from "../DashboardComponents/CreateServiceForm"; 
import ServiceTable from '../DashboardComponents/ServiceTable';
import "../DashboardComponents/Dashboard.css"; // Import your CSS file
const ServicesSection = () => {
  return (
    <div className=' flex flex-row gap-4'>
        <CreateServiceForm/>
        <ServiceTable/>
    </div>
  )
}

export default ServicesSection