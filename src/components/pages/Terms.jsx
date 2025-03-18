import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Terms and Conditions</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Last updated: [Date]
      </p>
      {/* Placeholder for terms and conditions content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h3>
        <p className="text-gray-600 dark:text-gray-300">By accessing or using our services, you agree to be bound by these terms and conditions.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Use of Service</h3>
        <p className="text-gray-600 dark:text-gray-300">You agree to use our service only for lawful purposes and in accordance with these terms.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. User Accounts</h3>
        <p className="text-gray-600 dark:text-gray-300">You are responsible for maintaining the confidentiality of your account information. You agree not to share your account with anyone.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Intellectual Property</h3>
        <p className="text-gray-600 dark:text-gray-300">All content on this platform, including text, graphics, logos, and software, is the property of HealthTech and is protected by copyright and intellectual property laws.</p>
      </div>
    </div>
  );
};

export default Terms;
