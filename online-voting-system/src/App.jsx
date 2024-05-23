import React from 'react';
import ElectionHistoryTable from './components/Election/ElectionHistory';
import RegistrationForm from './pages/Register';
import LoginForm from './pages/Login';

const elections = [
  { id: 1, title: 'Election 1', startDate: '2024-05-01', endDate: '2024-05-07', isActive: false },
  { id: 2, title: 'Election 2', startDate: '2024-06-01', endDate: '2024-06-07', isActive: true },
  // Add more election objects as needed
];

const App = () => {
  return (
    <div className="container mx-auto px-4">
      <LoginForm/>
    </div>
  );
};

export default App;
