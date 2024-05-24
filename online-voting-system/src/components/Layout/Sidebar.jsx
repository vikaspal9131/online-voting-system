import React, { useState } from 'react';
import { FaBars, FaHome, FaChartBar, FaHistory, FaPoll, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-gray-800 text-white w-64 min-h-screen fixed top-0 bottom-0 flex flex-col justify-between transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}>
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        <h2 className={`${isExpanded ? 'block' : 'hidden'} text-xl font-semibold`}>Sidebar</h2>
        <button onClick={toggleSidebar} className="text-gray-400 focus:outline-none ">
          <FaBars />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="mt-4">
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/" className="flex items-center">
              {isExpanded ? <><FaHome /><span className="ml-2">Home</span></> : <FaHome />}
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/dashboard" className="flex items-center">
              {isExpanded ? <><FaChartBar /><span className="ml-2">Dashboard</span></> : <FaChartBar />}
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/elections" className="flex items-center">
              {isExpanded ? <><FaPoll /><span className="ml-2">Elections</span></> : <FaPoll />}
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/history" className="flex items-center">
              {isExpanded ? <><FaHistory /><span className="ml-2">History</span></> : <FaHistory />}
            </Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
            <Link to="/help" className="flex items-center">
              {isExpanded ? <><FaQuestionCircle /><span className="ml-2">Help</span></> : <FaQuestionCircle />}
            </Link>
          </li>
          {/* Add more sidebar options as needed */}
        </ul>
      </div>
      <div className={`py-4 ${isExpanded ? 'px-20' : 'px-2'} border-t border-gray-700`}>
      <Link to="/logout">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
          {isExpanded ? 'Logout' : <FaSignOutAlt />}
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
