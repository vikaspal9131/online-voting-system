// src/components/Sidebar.jsx
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-screen w-64 fixed left-0 top-0 overflow-y-auto">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Voting System</h1>
      </div>
      <ul>
        <li className="px-4 py-2 hover:bg-gray-700">Dashboard</li>
        <li className="px-4 py-2 hover:bg-gray-700">Create Poll</li>
        <li className="px-4 py-2 hover:bg-gray-700">Manage Polls</li>
        <li className="px-4 py-2 hover:bg-gray-700">Results</li>
        <li className="px-4 py-2 hover:bg-gray-700">Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
