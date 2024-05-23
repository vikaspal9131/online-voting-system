// HistoryPage.jsx
import React from 'react';
import Sidebar from '../components/Layout/Sidebar';
import TopNavbar from '../components/Layout/TopNavbar';
import ElectionHistory from '../components/Election/ElectionHistory';

const HistoryPage = () => {
  // Dummy data to simulate election history
  const elections = [
    {
      id: 1,
      title: '2024 Presidential Election',
      description: 'Election to choose the next president of the country.',
      date: '2024-11-08',
      time: 'All day',
      location: 'Nationwide',
    },
    {
      id: 2,
      title: 'City Council Elections',
      description: 'Election to choose representatives for the city council.',
      date: '2024-09-15',
      time: '8:00 AM - 6:00 PM',
      location: 'Various polling stations across the city',
    },
    {
      id: 3,
      title: 'School Board Elections',
      description: 'Election to select members of the local school board.',
      date: '2024-10-20',
      time: '8:00 AM - 8:00 PM',
      location: 'Local schools',
    },
  ];

  return (
    <div className="flex">
        <Sidebar />
        <div className="flex-1 pl-64">
          <TopNavbar />
          

    
   

          <h2 className="text-2xl font-semibold mb-4">Election History</h2>
          <ElectionHistory elections={elections} />
        </div>
      </div>
  
  );
};

export default HistoryPage;
