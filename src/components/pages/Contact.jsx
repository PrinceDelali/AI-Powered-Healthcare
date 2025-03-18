import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Contact Us</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        If you have any questions or feedback, please reach out to us.
      </p>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <form>
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent" />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300">Message</label>
                <textarea id="message" name="message" className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                Send Message
            </button>
        </form>
        </div>
    </div>
  );
};

export default Contact;
