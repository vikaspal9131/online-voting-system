// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import CreateElection from './components/Election/CreateElection';

const App = () => {
  return (
    <Router>
      <div className="flex">   
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/home" element={<Dashboard />} />
          <Route path="/create-election" element={<CreateElection />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;