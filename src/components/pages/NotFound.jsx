import React from 'react';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-6xl font-extrabold text-gray-800 dark:text-gray-200 mb-4">
        404
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
        Oops! The page you're looking for could not be found.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Go back to Home
      </Link>
    </div>
  );
};
export default NotFound;
