import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">About Us</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        We are dedicated to revolutionizing healthcare accessibility and delivery through innovative technology. Our mission is to empower individuals to take control of their health journey.
      </p>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
        <p className="text-gray-600 dark:text-gray-300">Our mission is to transform healthcare access and delivery through technology, empowering individuals to proactively manage their well-being.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
        <p className="text-gray-600 dark:text-gray-300">Our vision is to create a future where healthcare is more accessible, efficient, and personalized for everyone, using the power of AI and digital platforms.</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md mb-8">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Team</h3>
        <p className="text-gray-600 dark:text-gray-300">We are a group of healthcare professionals and AI experts who are passionate about improving healthcare.</p>
      </div>
    </div>
  );
};

export default About;
