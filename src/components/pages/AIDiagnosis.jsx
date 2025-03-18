import { useState } from 'react';

const AIDiagnosis = () => {
  const [symptoms, setSymptoms] = useState('');
  const [loading, setLoading] = useState(false);
  const [diagnosis, setDiagnosis] = useState(null);
  const [error, setError] = useState('');

  const commonSymptoms = [
    'Fever', 'Headache', 'Cough', 'Fatigue', 
    'Shortness of breath', 'Body aches', 'Sore throat', 'Nausea', 'Dizziness', 'Runny Nose'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!symptoms.trim()) {
      setError('Please describe your symptoms');
      return;
    }

    setLoading(true);
    setError('');
    setDiagnosis(null);
    try {
      // TODO: Integrate with OpenAI API
      // This is a placeholder response
      const mockDiagnosis = {
        possibleConditions: [
          {
            condition: 'Common Cold',
            probability: 'High',
            description: 'A viral infection of the upper respiratory tract.',
            recommendations: [
              'Rest and stay hydrated',
              'Over-the-counter cold medications',
              'Monitor symptoms for 7-10 days'
            ]
          },
          {
            condition: 'Influenza (Flu)',
            probability: 'Medium',
            description: 'A more severe respiratory illness than the common cold.',
            recommendations: [
              'Rest and stay hydrated',
              'Antiviral medication (if within 48 hours of onset)',
              'Seek medical advice if symptoms worsen'
            ]
          }
        ],
        disclaimer: 'This is an AI-generated preliminary assessment and should not replace professional medical advice.'
      };

      setDiagnosis(mockDiagnosis);
    } catch (err) {
      setError('Failed to analyze symptoms. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const addSymptom = (symptom) => {
    setSymptoms(prev => 
      prev ? `${prev}, ${symptom.toLowerCase()}` : symptom.toLowerCase()
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          AI Health Diagnosis
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Describe your symptoms in detail for an AI-powered health assessment
        </p>
      </div>

      {/* Symptom Input Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <textarea
            className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            placeholder="Describe your symptoms here... (e.g., fever, headache, cough)"
            rows="6"
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
          ></textarea>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
            {commonSymptoms.map((symptom, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => addSymptom(symptom)}
                  className="px-3 py-1 text-sm text-emerald-600 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-600 rounded-full hover:bg-emerald-100 dark:hover:bg-gray-700 transition duration-300"
                >
                  {symptom}
                </button>
            ))}
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          disabled={loading}
          className={`w-full px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Analyzing...' : 'Get Diagnosis'}
        </button>
      </form>

      {/* AI Diagnosis Results */}
      {diagnosis && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Possible Results
          </h3>
          {diagnosis.possibleConditions.map((condition, index) => (
            <div key={index} className="mb-4">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                {condition.condition} ({condition.probability})
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{condition.description}</p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                {condition.recommendations.map((recommendation, i) => (
                  <li key={i}>{recommendation}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            {diagnosis.disclaimer}
          </p>
        </div>
      )}
    </div>
  );
};

export default AIDiagnosis;
