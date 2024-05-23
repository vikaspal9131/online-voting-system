import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import TopNavigation from './components/Layout/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <TopNavigation />
        {/* Your routes */}
      </div>
    </Router>
  );
};

export default App;
