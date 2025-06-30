import { Link } from 'react-router-dom';
import Card from './ui/Card';

export default function InvestorCard({ investor }) {
  return (
    <Card>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{investor.name}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{investor.firm}</p>
        </div>
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
            <span className="text-green-600 dark:text-green-300 font-medium">{investor.matchScore}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Investment Focus</p>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{investor.focus}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Avg. Investment</p>
          <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{investor.avgInvestment}</p>
        </div>
      </div>

      <div className="mt-6 flex space-x-2">
        <Link
          to="/dashboard/messages"
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center text-sm"
        >
          Contact
        </Link>
        <button className="flex-1 border border-gray-300 hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 py-2 px-4 rounded-md text-sm">
          Save
        </button>
      </div>
    </Card>
  );
}