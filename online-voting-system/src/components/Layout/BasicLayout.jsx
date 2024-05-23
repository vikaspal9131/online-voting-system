// Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import TopNavbar from './TopNavbar';

const Layout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 pl-64">
        <TopNavbar />
        <div className="p-4 space-y-8">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
