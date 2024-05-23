import React from 'react';
<<<<<<< HEAD
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
=======
import { BrowserRouter as Router } from 'react-router-dom';
import TopNavigation from './components/Layout/Navbar';
import Card from './components/Election/ElectionCard';


const App = () => {
  return (
    <div className="App flex justify-center items-center h-screen">
    <Card />
  </div>
>>>>>>> 2166e1f132a3b446be75e4f29880bf777d3d61e2
  );
};

export default App;
