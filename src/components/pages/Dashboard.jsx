import React, { useEffect, useState } from 'react';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check for user in local storage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    } else {
        navigate('/login');
    }

    setLoading(false);

  }, []);

  if(loading) return <Loading />

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {user && (
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome back, {user.name}
        </h1>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Placeholder for upcoming appointments */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Upcoming Appointments
          </h2>
          <p className="text-gray-600 dark:text-gray-300">No upcoming appointments.</p>
        </div>

        {/* Placeholder for recent prescriptions */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recent Prescriptions
          </h2>
          <p className="text-gray-600 dark:text-gray-300">No recent prescriptions.</p>
        </div>

        {/* Placeholder for messages */}
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Messages
          </h2>
          <p className="text-gray-600 dark:text-gray-300">No new messages.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
