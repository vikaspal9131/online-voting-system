// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import CreateElection from './components/Election/CreateElection';
import ElectionList from './pages/Election';
import HistoryPage from './pages/History';
import Homepage from './pages/Home';
import ParticipantInfo from './components/Election/ParticipantsInfo';
import Registration from './pages/Register';
import Login from './pages/Login';
import ResetPassword from './pages/ResetPassword';
import ForgotPassword from './pages/ForgotPassword';
import ViewProfile from './components/Profile/ViewProfile';

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
          <Route path="/vote/1" element={<ParticipantInfo />} />
          <Route path="/vote/aayush/1" element={<ParticipantInfo />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile/view" element={<ViewProfile/>} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;