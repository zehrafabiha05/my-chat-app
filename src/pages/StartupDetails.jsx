import { useParams } from 'react-router-dom';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const StartupDetails = () => {
  const { id } = useParams();
  
  // Mock data - replace with actual API call in a real application
  const startup = {
    id: id,
    name: 'EcoTech Innovations',
    description: 'Sustainable technology solutions for modern businesses reducing carbon footprint by 40%',
    industry: 'Clean Tech',
    stage: 'Series A',
    funding: '$2M',
    valuation: '$10M',
    founded: '2020',
    teamSize: '15',
    location: 'San Francisco, CA',
    website: 'ecotech.example.com',
    contactEmail: 'contact@ecotech.example.com',
    pitchDeck: 'ecotech-pitch.pdf',
    matchScore: 92,
    logo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <img 
              src={startup.logo} 
              alt={`${startup.name} logo`} 
              className="h-32 w-32 rounded-lg object-cover"
            />
          </div>
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{startup.name}</h1>
                <p className="text-gray-600 dark:text-gray-300 mt-1">{startup.description}</p>
              </div>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                  <span className="text-green-600 dark:text-green-300 font-medium">{startup.matchScore}</span>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Industry</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{startup.industry}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Stage</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{startup.stage}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Funding</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{startup.funding}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Valuation</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{startup.valuation}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Founded</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{startup.founded}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Team Size</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{startup.teamSize}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="md:col-span-2">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Company Details</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Problem Statement</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Current solutions in the market are inefficient and contribute significantly to environmental pollution. 
                Our technology addresses these issues by providing sustainable alternatives without compromising performance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Solution</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Our proprietary technology reduces energy consumption by 40% while maintaining the same performance levels 
                as traditional solutions. We've developed a scalable platform that can be adapted across multiple industries.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Traction</h3>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                <li>200% YoY revenue growth</li>
                <li>50+ enterprise clients</li>
                <li>Partnerships with 3 Fortune 500 companies</li>
                <li>5 patents filed</li>
              </ul>
            </div>
          </div>
        </Card>

        <div className="space-y-6">
          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Contact Information</h2>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Location</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">{startup.location}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Website</p>
                <a 
                  href={`https://${startup.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                >
                  {startup.website}
                </a>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Contact Email</p>
                <a 
                  href={`mailto:${startup.contactEmail}`}
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400"
                >
                  {startup.contactEmail}
                </a>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Investment Opportunity</h2>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Funding Round</p>
                <p className="text-sm font-medium text-gray-700 dark:text-gray-200">Series A - $5M target</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Use of Funds</p>
                <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-200 space-y-1">
                  <li>Product development (40%)</li>
                  <li>Market expansion (30%)</li>
                  <li>Team growth (20%)</li>
                  <li>Operations (10%)</li>
                </ul>
              </div>
              <div className="pt-2">
                <a 
                  href={startup.pitchDeck}
                  download
                  className="inline-flex items-center text-blue-600 hover:text-blue-500 dark:text-blue-400 text-sm font-medium"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                  </svg>
                  Download Pitch Deck
                </a>
              </div>
            </div>
          </Card>

          <div className="flex space-x-3">
            <Button variant="primary" className="flex-1">
              Contact Startup
            </Button>
            <Button variant="outline" className="flex-1">
              Save for Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDetails;