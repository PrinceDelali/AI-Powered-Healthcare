import React, { useState } from 'react';

const HealthcareLocator = () => {
  const [location, setLocation] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setIsSearching(true);
    setError('');
    setSearchResults([]);

    try {
      // Simulate searching for healthcare facilities
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Placeholder data for search results
      const mockResults = [
        {
          name: 'MediCare Clinic',
          type: 'Hospital',
          address: '123 Main Street, Accra',
          phone: '+233 123 456 789',
          distance: '2.5 km'
        },
        {
          name: 'HealthPlus Pharmacy',
          type: 'Pharmacy',
          address: '456 High Street, Accra',
          phone: '+233 987 654 321',
          distance: '1.2 km'
        },
        {
            name: 'A-Z Clinic',
            type: 'Clinic',
            address: '456 High Street, Accra',
            phone: '+233 987 654 321',
            distance: '1.5 km'
          }
      ];

      setSearchResults(mockResults);
    } catch (err) {
      setError('Failed to search for healthcare facilities. Please try again.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Find Healthcare Near You</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Locate pharmacies, hospitals, and other healthcare facilities in your area.
      </p>
      {/* Placeholder for map */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 dark:text-gray-300">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Enter your location here"
          />
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
            onClick={handleSearch}
          className={`mt-4 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
            isSearching ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isSearching}
        >
          {isSearching ? 'Searching...' : 'Search'}
        </button>
        {/* Placeholder for displaying search results */}
        {searchResults.length > 0 && (
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Search Results
              </h3>
              <ul className="space-y-4">
                {searchResults.map((result, index) => (
                  <li key={index} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {result.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Type: {result.type}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Address: {result.address}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                      Phone: {result.phone}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300">
                        Distance: {result.distance}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        {searchResults.length === 0 && !isSearching && (
          <div className="mt-8">
            <p className="text-gray-600 dark:text-gray-300">
              No results found.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HealthcareLocator;
