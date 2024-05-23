import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link

const TopNavbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-900 text-white w-full">
      <h1 className="text-2xl font-bold">Election Management System</h1>
      <div className="flex items-center">
        {/* Use Link component for the button */}
        <Link to="/create-election" className="bg-blue-500 text-white py-1 px-4 rounded mr-4 hover:bg-blue-600">Create New</Link>
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};

export default TopNavbar;
