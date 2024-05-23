import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SideNavbar from './components/Layout/Sidebar';


function App() {
  return (
      <div className="flex">
        <SideNavbar />

      </div>
 

  );
}

export default App;
