import React from 'react';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ElectionCards = () => {
  const elections = [
    {
      id: 1,
      title: 'Presidential Election',
      date: '2024-11-05',
      time: '09:00 AM - 05:00 PM',
      location: 'National Hall',
      image: 'https://via.placeholder.com/150', // Placeholder image URL
      description: 'The Presidential Election to elect the next leader of our country.'
    },
    {
      id: 2,
      title: 'Local Election',
      date: '2024-08-15',
      time: '08:00 AM - 03:00 PM',
      location: 'City Center',
      image: 'https://via.placeholder.com/150', // Placeholder image URL
      description: 'Local elections for city officials and representatives.'
    },{
      id: 3,
      title: 'Local Election',
      date: '2024-08-15',
      time: '08:00 AM - 03:00 PM',
      location: 'City Center',
      image: 'https://via.placeholder.com/150', // Placeholder image URL
      description: 'Local elections for city officials and representatives.'
    },
    // Add more elections here
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Ongoing Election</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {elections.map(election => (
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
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ElectionCards;
