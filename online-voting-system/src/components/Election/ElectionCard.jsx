// ElectionCards.jsx
import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ElectionCards = ({ elections, maxVisible }) => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {elections.slice(0, maxVisible).map(election => (
          <motion.div
            key={election.id}
            className="bg-cyan-100 p-4 rounded shadow-md transition transform hover:-translate-y-1 hover:shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={election.image} alt={election.title} className="w-full h-32 object-cover rounded-t-md" />
            <h2 className="text-xl font-semibold mb-2 mt-2">{election.title}</h2>
            <p className="text-gray-700 mb-2">{election.description}</p>
            <div className="flex items-center text-gray-600 mb-2">
              <FaCalendarAlt className="mr-2" />
              <span>{election.date}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <FaClock className="mr-2" />
              <span>{election.time}</span>
            </div>
            <div className="flex items-center text-gray-600 mb-2">
              <FaMapMarkerAlt className="mr-2" />
              <span>{election.location}</span>
            </div>
            <Link to={election.voteLink} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md inline-block">Vote</Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ElectionCards;
