import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const UserProfile = () => {
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
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">User Profile</h1>
      {/* Placeholder for user profile data */}
      {user && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your name: {user.name}
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Your email: {user.email}
          </p>
          <button className="mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
