import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Last updated: [Date]
      </p>
      {/* Placeholder for privacy policy content */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">1. Information Collection</h3>
        <p className="text-gray-600 dark:text-gray-300">We collect personal information that you provide to us directly, such as your name, email, and health information.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">2. Use of Information</h3>
        <p className="text-gray-600 dark:text-gray-300">We use the collected information to provide, maintain, and improve our services, as well as to personalize your experience.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3. Information Sharing</h3>
        <p className="text-gray-600 dark:text-gray-300">We do not share your personal information with third parties unless required by law or with your explicit consent.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">4. Data Security</h3>
        <p className="text-gray-600 dark:text-gray-300">We take reasonable measures to protect your personal information from unauthorized access and use.</p>
      </div>
    </div>
  );
};

export default Privacy;
