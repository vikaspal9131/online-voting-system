import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNavigation from './components/Layout/Navbar';
import Card from './components/Election/ElectionCard';


const App = () => {
  return (
    <div className="App flex justify-center items-center h-screen">
    <Card />
  </div>
  );
};

export default App;
