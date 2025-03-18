import { useState } from 'react';

const mockPrescriptions = [
  {
    id: 'RX123456',
    patientName: 'John Doe',
    doctorName: 'Dr. Kwame Mensah',
    medication: 'Artemether/Lumefantrine',
    dosage: '80mg/480mg',
    frequency: 'Twice daily for 3 days',
    instructions: 'Take with food',
    dateIssued: '2025-03-10',
    expiryDate: '2025-04-10',
    status: 'active',
    pharmacy: 'MediCare Pharmacy, Accra',
  },
  {
    id: 'RX123457',
    patientName: 'John Doe',
    doctorName: 'Dr. Sarah Addo',
    medication: 'Amoxicillin',
    dosage: '500mg',
    frequency: 'Three times daily for 7 days',
    instructions: 'Complete the full course',
    dateIssued: '2025-03-05',
    expiryDate: '2025-03-12',
    status: 'completed',
    pharmacy: 'HealthPlus Pharmacy, Kumasi',
  }
];

const DigitalPrescriptions = () => {
  const [prescriptions, setPrescriptions] = useState(mockPrescriptions);
  const [selectedPrescription, setSelectedPrescription] = useState(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredPrescriptions = prescriptions.filter(prescription => {
    if (filterStatus === 'all') return true;
    return prescription.status === filterStatus;
  });

  const handleStatusChange = (prescriptionId, newStatus) => {
    setPrescriptions(prevPrescriptions =>
      prevPrescriptions.map(prescription =>
        prescription.id === prescriptionId
          ? { ...prescription, status: newStatus }
          : prescription
      )
    );
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Digital Prescriptions
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Manage your prescriptions and medications digitally
        </p>
      </div>

      {/* Filter Controls */}
      <div className="mb-6 flex justify-between items-center">
        <div className="flex gap-2">
          <button
            onClick={() => setFilterStatus('all')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filterStatus === 'all'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilterStatus('active')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filterStatus === 'active'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilterStatus('completed')}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              filterStatus === 'completed'
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Prescriptions List */}
      <div className="grid gap-6">
        {filteredPrescriptions.map((prescription) => (
          <div
            key={prescription.id}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {prescription.medication}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Prescription ID: {prescription.id}
                </p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  prescription.status === 'active'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                }`}
              >
                {prescription.status.charAt(0).toUpperCase() + prescription.status.slice(1)}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Prescribed By
                </p>
                <p className="text-gray-900 dark:text-white">{prescription.doctorName}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Pharmacy
                </p>
                <p className="text-gray-900 dark:text-white">{prescription.pharmacy}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Date Issued
                </p>
                <p className="text-gray-900 dark:text-white">
                  {new Date(prescription.dateIssued).toLocaleDateString()}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Expiry Date
                </p>
                <p className="text-gray-900 dark:text-white">
                  {new Date(prescription.expiryDate).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                  Dosage Instructions
                </h4>
                <p className="text-gray-900 dark:text-white">
                  {prescription.dosage} - {prescription.frequency}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mt-1">
                  {prescription.instructions}
                </p>
              </div>

              {prescription.status === 'active' && (
                <div className="flex justify-end">
                  <button
                    onClick={() => handleStatusChange(prescription.id, 'completed')}
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    Mark as Completed
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {filteredPrescriptions.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600 dark:text-gray-400">
              No {filterStatus !== 'all' ? filterStatus : ''} prescriptions found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DigitalPrescriptions;
