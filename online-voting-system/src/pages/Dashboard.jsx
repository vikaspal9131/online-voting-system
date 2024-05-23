import React from 'react';
import Sidebar from '../components/Layout/Sidebar';
import TopNavbar from '../components/Layout/TopNavbar';
import ElectionCards from '../components/Election/ElectionCard';
import ElectionHistory from '../components/Election/ElectionHistory';

const Dashboard = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64"> {/* Add left padding to accommodate the sidebar */}
        <TopNavbar />
        <div className="p-4 space-y-8">
          <ElectionCards />
          <ElectionHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
