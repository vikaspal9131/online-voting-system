import React, { useState } from 'react';
import { FaBars, FaHome, FaChartBar, FaHistory, FaPoll, FaQuestionCircle, FaSignOutAlt } from 'react-icons/fa';


const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`bg-gray-800 text-white w-64 min-h-screen fixed left-0 top-0 bottom-0 flex flex-col justify-between transition-all duration-300 ${isExpanded ? 'w-64' : 'w-16'}`}>
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
      <h2 className={`${isExpanded ? 'block' : 'hidden'} text-xl font-semibold`}>Sidebar</h2>
        <button onClick={toggleSidebar} className="text-gray-400 focus:outline-none ">
          <FaBars />
        </button>
      </div>
      <div className={`${isExpanded ? 'block' : 'hidden'} flex-1 overflow-y-auto`}>
          <ul className="mt-4">
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">{isExpanded ? <><FaHome /><span className="ml-2">Home</span></> : <><FaHome /></>}</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">{isExpanded ? <><FaChartBar /><span className="ml-2">Dashboard</span></> : <FaChartBar />}</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">{isExpanded ? <><FaPoll /><span className="ml-2">Elections</span></> : <FaPoll />}</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">{isExpanded ? <><FaHistory /><span className="ml-2">History</span></> : <FaHistory />}</li>
            <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer flex items-center">{isExpanded ? <><FaQuestionCircle /><span className="ml-2">Help</span></> : <FaQuestionCircle />}</li>
            {/* Add more sidebar options as needed */}
          </ul>
        </div>
        <div className="p-4 border-t border-gray-700">
        <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">{isExpanded ? 'Logout' : <FaSignOutAlt />}</button>
      </div>
    </div>
  );
};

export default Sidebar;
