// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import CreateElection from './components/Election/CreateElection';
import ElectionList from './pages/Election';
import HistoryPage from './pages/History';
import Homepage from './pages/Home';

const App = () => {
  return (
    <Router>
      <div className="flex">   
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/create-election" element={<CreateElection />} />
          <Route path="/elections" element={<ElectionList />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;