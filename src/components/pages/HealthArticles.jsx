import { useState } from 'react';

const articles = [
  {
    id: 1,
    title: 'Understanding Malaria Prevention',
    category: 'Tropical Diseases',
    image: 'https://placehold.co/600x400/png',
    summary: 'Learn about effective ways to prevent malaria, including the use of mosquito nets and antimalarial medications.',
    content: `Malaria remains a significant health concern in Ghana and many tropical regions. Prevention is key to reducing its impact. Here are essential steps:

1. Use insecticide-treated mosquito nets
2. Apply mosquito repellent
3. Wear protective clothing
4. Keep surroundings clean and free of stagnant water
5. Consider antimalarial medication when recommended

Early symptoms include fever, headache, and chills. Seek medical attention if you experience these symptoms.`,
    author: 'Dr. Kwame Mensah',
    date: '2025-03-10'
  },
  {
    id: 2,
    title: 'Maintaining Heart Health',
    category: 'Cardiovascular',
    image: 'https://placehold.co/600x400/png',
    summary: 'Essential tips for maintaining a healthy heart through diet, exercise, and lifestyle changes.',
    content: `Your heart health is crucial for overall wellbeing. Follow these guidelines for a healthy heart:

1. Regular exercise (at least 30 minutes daily)
2. Balanced diet rich in fruits and vegetables
3. Limited salt and processed food intake
4. Regular blood pressure monitoring
5. Stress management
6. Adequate sleep

Risk factors include high blood pressure, smoking, and obesity. Regular check-ups are essential.`,
    author: 'Dr. Sarah Addo',
    date: '2025-03-08'
  },
  {
    id: 3,
    title: 'Managing Diabetes',
    category: 'Chronic Conditions',
    image: 'https://placehold.co/600x400/png',
    summary: 'Comprehensive guide to managing diabetes through proper diet, exercise, and medication.',
    content: `Diabetes management requires a comprehensive approach. Key aspects include:

1. Regular blood sugar monitoring
2. Balanced meal planning
3. Regular physical activity
4. Medication adherence
5. Foot care
6. Regular medical check-ups

Understanding carbohydrate counting and glycemic index can help in meal planning.`,
    author: 'Dr. Emma Thompson',
    date: '2025-03-05'
  }
];

const categories = ['All', 'Tropical Diseases', 'Cardiovascular', 'Chronic Conditions'];

const HealthArticles = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Health Tips & Articles
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Stay informed with the latest health information and medical insights
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-8 flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      {!selectedArticle ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedArticle(article)}
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {article.category}
                </span>
                <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {article.title}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {article.summary}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    By {article.author}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(article.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Article Detail View */
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <button
            onClick={() => setSelectedArticle(null)}
            className="mb-6 text-blue-600 dark:text-blue-400 hover:text-blue-800 flex items-center"
          >
            ← Back to Articles
          </button>
          
          <img
            src={selectedArticle.image}
            alt={selectedArticle.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
            {selectedArticle.category}
          </span>
          
          <h1 className="mt-2 text-3xl font-bold text-gray-900 dark:text-white">
            {selectedArticle.title}
          </h1>
          
          <div className="mt-4 flex items-center text-gray-600 dark:text-gray-300">
            <span>By {selectedArticle.author}</span>
            <span className="mx-2">•</span>
            <span>{new Date(selectedArticle.date).toLocaleDateString()}</span>
          </div>
          
          <div className="mt-8 prose dark:prose-invert max-w-none">
            {selectedArticle.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700 dark:text-gray-300">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthArticles;
