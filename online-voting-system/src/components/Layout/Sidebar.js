import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative h-screen flex">
      {/* Hamburger Icon */}
      <button
        className="absolute top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-md focus:outline-none md:hidden"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <h1 className="text-2xl font-semibold">Project Name</h1>
          </div>
          <nav className="flex-1 p-4">
            <Link to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
              Home
            </Link>
            <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
              Dashboard
            </Link>
            <Link to="/history" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
              History
            </Link>
            <Link to="/results" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
              Results
            </Link>
            <Link to="/help" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
              Help
            </Link>
          </nav>
          <div className="p-4">
            <button
              className="w-full py-2.5 px-4 bg-red-600 text-white rounded transition duration-200 hover:bg-red-700 focus:outline-none"
              onClick={() => alert('Logged out')}
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default SideNavbar;
