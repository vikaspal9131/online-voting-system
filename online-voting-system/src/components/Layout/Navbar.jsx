import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const TopNavigation = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-white font-semibold text-lg">Voting System</Link>
      </div>
      <div className="flex items-center">
        <Link to="/profile" className="text-white hover:text-gray-300 mr-4">
          <FontAwesomeIcon icon={faUser} /> profile
        </Link>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">
          Create New
        </button>
      </div>
    </nav>
  );
};

export default TopNavigation;
