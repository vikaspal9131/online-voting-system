import React from 'react';
import Sidebar from '../components/Layout/Sidebar';
import TopNavbar from '../components/Layout/TopNavbar';
import ElectionCards from '../components/Election/ElectionCard';
import ElectionHistory from '../components/Election/ElectionHistory';

const Dashboard = () => {
  const elections = [
    {
      id: 1,
      title: 'Presidential Election',
      date: '2024-11-05',
      time: '09:00 AM - 05:00 PM',
      location: 'National Hall',
      image: 'https://via.placeholder.com/150',
      description: 'The Presidential Election to elect the next leader of our country.',
      voteLink: '/vote/1'
    },
    {
      id: 2,
      title: 'Local Election',
      date: '2024-08-15',
      time: '08:00 AM - 03:00 PM',
      location: 'City Center',
      image: 'https://via.placeholder.com/150',
      description: 'Local elections for city officials and representatives.',
      voteLink: '/vote/2'
    },
    {
      id: 1,
      title: 'Presidential Election',
      date: '2024-11-05',
      time: '09:00 AM - 05:00 PM',
      location: 'National Hall',
      image: 'https://via.placeholder.com/150',
      description: 'The Presidential Election to elect the next leader of our country.',
      voteLink: '/vote/1'
    },
    {
      id: 2,
      title: 'Local Election',
      date: '2024-08-15',
      time: '08:00 AM - 03:00 PM',
      location: 'City Center',
      image: 'https://via.placeholder.com/150',
      description: 'Local elections for city officials and representatives.',
      voteLink: '/vote/2'
    },{
      id: 1,
      title: 'Presidential Election',
      date: '2024-11-05',
      time: '09:00 AM - 05:00 PM',
      location: 'National Hall',
      image: 'https://via.placeholder.com/150',
      description: 'The Presidential Election to elect the next leader of our country.',
      voteLink: '/vote/1'
    },
    {
      id: 2,
      title: 'Local Election',
      date: '2024-08-15',
      time: '08:00 AM - 03:00 PM',
      location: 'City Center',
      image: 'https://via.placeholder.com/150',
      description: 'Local elections for city officials and representatives.',
      voteLink: '/vote/2'
    },{
      id: 1,
      title: 'Presidential Election',
      date: '2024-11-05',
      time: '09:00 AM - 05:00 PM',
      location: 'National Hall',
      image: 'https://via.placeholder.com/150',
      description: 'The Presidential Election to elect the next leader of our country.',
      voteLink: '/vote/1'
    },
    {
      id: 2,
      title: 'Local Election',
      date: '2024-08-15',
      time: '08:00 AM - 03:00 PM',
      location: 'City Center',
      image: 'https://via.placeholder.com/150',
      description: 'Local elections for city officials and representatives.',
      voteLink: '/vote/2'
    },
    // Add more elections here
  ];
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64"> {/* Add left padding to accommodate the sidebar */}
      <h2 className="text-2xl font-semibold mb-4">Ongoing Election</h2>
        <TopNavbar />
        <div className="p-4 space-y-8">
        <ElectionCards elections={elections} maxVisible={3} />
          <ElectionHistory />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
