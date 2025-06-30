import { useState } from 'react';
import Card from '../components/ui/Card';
import StartupCard from '../components/StartupCard';

const InvestorDashboard = () => {
  const [activeTab, setActiveTab] = useState('all');

  const startups = [
    {
      id: 1,
      name: 'EcoTech Innovations',
      description: 'Sustainable technology solutions for modern businesses',
      industry: 'Clean Tech',
      stage: 'Series A',
      funding: '$2M',
      valuation: '$10M',
      matchScore: 92,
    },
    {
      id: 2,
      name: 'HealthAI',
      description: 'AI-powered healthcare diagnostics platform',
      industry: 'Healthcare',
      stage: 'Seed',
      funding: '$500K',
      valuation: '$3M',
      matchScore: 87,
    },
    {
      id: 3,
      name: 'FoodPrint',
      description: 'Sustainable food packaging solutions',
      industry: 'Sustainability',
      stage: 'Pre-Seed',
      funding: '$250K',
      valuation: '$1.5M',
      matchScore: 78,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recommended Startups</h2>
          <div className="flex space-x-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-sm rounded-md ${activeTab === 'all' ? 'bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-400' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('high')}
              className={`px-4 py-2 text-sm rounded-md ${activeTab === 'high' ? 'bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-400' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
            >
              High Match
            </button>
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-4 py-2 text-sm rounded-md ${activeTab === 'saved' ? 'bg-blue-100 text-blue-700 dark:bg-gray-700 dark:text-blue-400' : 'text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'}`}
            >
              Saved
            </button>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {startups.map((startup) => (
          <StartupCard key={startup.id} startup={startup} />
        ))}
      </div>
    </div>
  );
};

export default InvestorDashboard;