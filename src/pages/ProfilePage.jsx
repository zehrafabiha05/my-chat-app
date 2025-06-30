import { useState } from 'react';
import Card from '../components/ui/Card';

const ProfilePage = () => {
  const [editMode, setEditMode] = useState(false);
  const userRole = localStorage.getItem('userRole');
  
  const [profile, setProfile] = useState({
    name: userRole === 'investor' ? 'Investor User' : 'Entrepreneur User',
    email: 'user@example.com',
    bio: userRole === 'investor' 
      ? 'Angel investor focused on early-stage tech startups with disruptive potential.' 
      : 'Founder of an innovative startup looking to change the industry.',
    location: 'San Francisco, CA',
    website: userRole === 'investor' ? 'greenventures.com' : 'myawesomeproduct.com',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <Card>
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Profile</h2>
          <button
            onClick={() => setEditMode(!editMode)}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium"
          >
            {editMode ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>
      </Card>

      <Card>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-shrink-0">
            <div className="h-32 w-32 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center text-gray-500 dark:text-gray-300">
              <span className="text-4xl">{profile.name.charAt(0)}</span>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                {editMode ? (
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{profile.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                {editMode ? (
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{profile.email}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
              {editMode ? (
                <textarea
                  name="bio"
                  rows="3"
                  value={profile.bio}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                />
              ) : (
                <p className="text-gray-900 dark:text-white">{profile.bio}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Location</label>
                {editMode ? (
                  <input
                    type="text"
                    name="location"
                    value={profile.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{profile.location}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Website</label>
                {editMode ? (
                  <input
                    type="text"
                    name="website"
                    value={profile.website}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600"
                  />
                ) : (
                  <p className="text-gray-900 dark:text-white">{profile.website}</p>
                )}
              </div>
            </div>

            {editMode && (
              <div className="flex justify-end">
                <button
                  onClick={() => setEditMode(false)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>
        </div>
      </Card>

      {userRole === 'investor' && (
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Investment Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Industries</label>
              <p className="text-gray-900 dark:text-white">Clean Tech, AI, Healthcare</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Investment Range</label>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Stage</label>
              <p className="text-gray-900 dark:text-white">Seed, Series A</p>
            </div>
          </div>
        </Card>
      )}

      {userRole === 'entrepreneur' && (
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Startup Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Startup Name</label>
              <p className="text-gray-900 dark:text-white">My Awesome Product</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Industry</label>
              <p className="text-gray-900 dark:text-white">SaaS</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Funding Stage</label>
              <p className="text-gray-900 dark:text-white">Seed</p>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default ProfilePage;