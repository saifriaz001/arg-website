import { useEffect, useState } from "react";
import LandingPage from "./Pages/LandingPage";
import Services from "./Pages/Services";
import ServiceSlugPage from "./Pages/ServiceSlugPage";
//import Projects from './Pages/Projects'
import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Pages/Footer";
import Navbar from "./NavBar/Navbar";
import ServicePage from "./Pages/ServicePage";
import ProjectPage from "./Pages/ProjectPage";
import AboutPage from "./Pages/AboutPage";
import StrategicCostManagement from "./components/StrategicCostManagement";
import EPCAdvisory from "./components/EPCAdvisory";
import ArchitectureEngineering from "./components/ArchitectureEngineering";
import ProjectManagement from "./components/ProjectManagement";
import GovernmentAdvisory from "./components/GovernmentAdvisory";
import EnvironmentalSolutions from "./components/EnvironmentalSolutions";
import SubStrategicCostManagement from "./sub-pages/Strategic-Cost-Management/Strategic-Cost-Management";
import LoginPage from "./Admin/LoginPage/LoginPage";
import AdminSection from "./Admin/AdminSection/AdminSection";
import DashboardLayout from "./Admin/AdminSection/DashboardSection/DashboardLayout";
import DashboardHome from "./Admin/AdminSection/DashboardSection/DashboardHome";
import CreateLocationForm from "./Admin/AdminSection/DashboardSection/CreateLocationForm";
import ServicesSection from "./Admin/AdminSection/DashboardSection/ServicesSection";
import CreateMarketForm from "./Admin/AdminSection/DashboardComponents/CreateMarketForm";
import CreateProjectForm from "./Admin/AdminSection/DashboardComponents/CreateProjectForm";
import News from "./Admin/AdminSection/DashboardSection/News";
import Market from "./Admin/AdminSection/DashboardSection/Market";
import ProjectList from "./Admin/AdminSection/DashboardSection/ProjectList";
import MarketPage from "./Pages/MarketPage";
import MarketSlugPage from "./Pages/MarketSlugPage";
import ProjectSlug from "./Pages/ProjectSlugPage";
import NewsPage from "./Pages/news";
import NewsSlugPage from "./Pages/NewsSlugPage";
import ProjectNavbar from "./Admin/AdminSection/DashboardSection/ProjectNavbar";
import Careers from "./Pages/Careers";
import JobDetail from "./Pages/JobDetails";
import Jobs from "./Admin/AdminSection/DashboardSection/Jobs";
import Apply from "./Pages/Apply";
import JobApplications from "./Admin/AdminSection/DashboardSection/JobApplications";

function App() {
  // scroll restored to top after refresh
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  return (
    <div className=" bg-cream">
      <div className="fixed top-0 left-0 w-full z-50 bg-cream shadow-md mb-10">
        <Navbar />
      </div>
      {/* <Bar/> */}
      <div className="pt-[70px] bg-cream">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/services" element={<Services />} /> */}
          {/* <Route path='/projects' element={<Projects/>} /> */}
          <Route path="/services" element={<ServicePage />} />
          <Route path="/services/:slug" element={<ServiceSlugPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/news/:slug" element={<NewsSlugPage />} />
          <Route path="/markets" element={<MarketPage />} />
          <Route path="/markets/:slug" element={<MarketSlugPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/:slug" element={<ProjectSlug />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/apply" element={<Apply />} />
          <Route path="/careers/:slug" element={<JobDetail />} />

          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/costmanagement" element={<StrategicCostManagement />} />
          <Route path="/epcadvisory" element={<EPCAdvisory />} />
          <Route
            path="/architectureEngineering"
            element={<ArchitectureEngineering />}
          />
          <Route path="/projectManagement" element={<ProjectManagement />} />
          <Route path="/governmentAdvisory" element={<GovernmentAdvisory />} />
          <Route
            path="/environmentalSolutions"
            element={<EnvironmentalSolutions />}
          />
          <Route
            path="/sub-pages/strategic-cost-management"
            element={<SubStrategicCostManagement />}
          />
          <Route path="/adminpanel" element={<AdminSection />} />
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardHome />} />
            <Route path="create-location" element={<CreateLocationForm />} />
            <Route path="create-service" element={<ServicesSection />} />
            <Route path="create-market" element={<Market />} />
            <Route path="create-project" element={<ProjectList />} />
            <Route path="create-jobs" element={<Jobs />} />
            <Route path="applied-jobs" element={<JobApplications />} />
            <Route path="create-news" element={<News />} />
            <Route path="create-projectarray" element={<ProjectNavbar />} />
            {/* Add more child routes here */}
          </Route>

          {/* Add more routes as needed */}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
