// Elections.jsx
import React from 'react';
import Sidebar from '../components/Layout/Sidebar';
import TopNavbar from '../components/Layout/TopNavbar';
import ElectionCards from '../components/Election/ElectionCard';
import Layout from '../components/Layout/BasicLayout';

const Elections = () => {
  // Dummy data to simulate elections
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
      <Layout>
          <ElectionCards elections={elections} maxVisible={elections.length} />
      </Layout>  
    );
  };


export default Elections;
