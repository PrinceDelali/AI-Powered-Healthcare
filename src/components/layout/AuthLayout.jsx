import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <main className='w-full'>
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
