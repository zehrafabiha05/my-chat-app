import { useState } from 'react';
import Card from '../components/ui/Card';
import InvestorCard from '../components/InvestorCard';

const EntrepreneurDashboard = () => {
  const [activeTab, setActiveTab] = useState('all');

  const investors = [
    {
      id: 1,
      name: 'Sarah Johnson',
      firm: 'Green Ventures',
      focus: 'Clean Tech, Sustainability',
      avgInvestment: '$500K - $2M',
      matchScore: 95,
    },
    {
      id: 2,
      name: 'Michael Chen',
      firm: 'TechGrowth Capital',
      focus: 'AI, SaaS, Healthcare',
      avgInvestment: '$1M - $5M',
      matchScore: 88,
    },
    {
      id: 3,
      name: 'David Wilson',
      firm: 'Early Stage Partners',
      focus: 'Consumer Tech, Fintech',
      avgInvestment: '$250K - $1M',
      matchScore: 82,
    },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Recommended Investors</h2>
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
        {investors.map((investor) => (
          <InvestorCard key={investor.id} investor={investor} />
        ))}
      </div>
    </div>
  );
};

export default EntrepreneurDashboard;