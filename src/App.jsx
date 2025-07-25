import { useState } from 'react'
import LandingPage from './Pages/LandingPage'
import Services from './Pages/Services'
//import Projects from './Pages/Projects'
import { Router , Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Pages/Footer'
import Navbar from './NavBar/Navbar'
import ServicesPage from './Pages/ServicesPage'
import Projects from './Pages/ProjectsPage'
import AboutPage from './Pages/AboutPage'
import StrategicCostManagement from './components/StrategicCostManagement'
import EPCAdvisory from './components/EPCAdvisory'
import ArchitectureEngineering from './components/ArchitectureEngineering'
import ProjectManagement from './components/ProjectManagement'
import GovernmentAdvisory from './components/GovernmentAdvisory'
import EnvironmentalSolutions from './components/EnvironmentalSolutions'
import SubStrategicCostManagement from './sub-pages/Strategic-Cost-Management/Strategic-Cost-Management'

function App() {


  return (
    <div className=' bg-cream'>
    <Navbar/>
    {/* <Bar/> */}
    <Routes>
      <Route path='/' element={<LandingPage/>}  />
      <Route path='/services' element={<Services/>}/>
      {/* <Route path='/projects' element={<Projects/>} /> */}
      <Route path='/servicespage' element={<ServicesPage/>}/>
      <Route path='/projectspage' element={<Projects/>}/>
      <Route path ="/about-us" element={<AboutPage/>}/>
      <Route path ="/costmanagement" element={<StrategicCostManagement/>}/>
      <Route path ="/epcadvisory" element={<EPCAdvisory/>}/>
      <Route path='/architectureEngineering' element={<ArchitectureEngineering/>}/>
      <Route path='/projectManagement' element={<ProjectManagement/>}/>
      <Route path='/governmentAdvisory' element={<GovernmentAdvisory/>} />
      <Route path='/environmentalSolutions' element={<EnvironmentalSolutions/>}/>
      <Route path='/sub-pages/strategic-cost-management' element={<SubStrategicCostManagement/>}/>
      {/* Add more routes as needed */}
     </Routes>
    <Footer/>
    </div>
  )
}

export default App
