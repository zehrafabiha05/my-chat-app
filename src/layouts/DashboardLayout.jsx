import { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { FiHome, FiBriefcase, FiMessageSquare, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';

export default function DashboardLayout() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const userRole = localStorage.getItem('userRole') || 'investor';

  const navItems = [
    { icon: <FiHome size={20} />, label: 'Dashboard', path: `/dashboard/${userRole}` },
    { icon: <FiBriefcase size={20} />, label: 'Startups', path: '/dashboard/startups' },
    { icon: <FiMessageSquare size={20} />, label: 'Messages', path: '/dashboard/messages' },
    { icon: <FiUser size={20} />, label: 'Profile', path: '/dashboard/profile' },
  ];

  return (
    <div className={`min-h-screen flex ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <div className="w-64 bg-white dark:bg-gray-800 shadow-md">
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-bold text-blue-600 dark:text-blue-400">Business Nexus</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {userRole === 'investor' ? 'Investor Dashboard' : 'Entrepreneur Dashboard'}
          </p>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`flex items-center p-3 rounded-lg ${location.pathname === item.path
                    ? 'bg-blue-50 text-blue-600 dark:bg-gray-700 dark:text-blue-400'
                    : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
                    }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="flex items-center p-3 w-full rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <FiSettings size={20} className="mr-3" />
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button className="flex items-center p-3 w-full rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
            <FiLogOut size={20} className="mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Top Navigation */}
        <div className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <h2 className="text-lg font-medium text-gray-900 dark:text-white">
                  {location.pathname.split('/').pop() === 'investor' && 'Investor Dashboard'}
                  {location.pathname.split('/').pop() === 'entrepreneur' && 'Entrepreneur Dashboard'}
                  {location.pathname.includes('messages') && 'Messages'}
                  {location.pathname.includes('profile') && 'Profile'}
                </h2>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <button className="p-1 rounded-full text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
                    <span className="sr-only">Notifications</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </button>
                  <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500"></span>
                </div>
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">
                    {userRole === 'investor' ? 'I' : 'E'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}