import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Dashboard</h2>
        <nav className="flex flex-col space-y-3">
          <Link to="/dashboard/create-service" className="hover:underline">Services </Link>
          <Link to="/dashboard/create-market" className="hover:underline">Market</Link>
          <Link to="/dashboard/create-project" className="hover:underline">Project</Link>
          <Link to="/dashboard/create-news" className="hover:underline">News</Link>  
          <Link to="/dashboard/create-jobs" className="hover:underline">Jobs</Link>  
          <Link to="/dashboard/create-projectarray" className="hover:underline">Project-Navbar</Link>            
          {/* Add more links as needed */}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet /> {/* Renders child routes */}
      </main>
    </div>
  );
};

export default DashboardLayout;
