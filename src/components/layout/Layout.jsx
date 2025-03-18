import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
