
export default function Card({ children, title, description }) {
  return (
    <div className="card bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow">
      <div className="p-6">
        {title && (
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {description}
          </p>
        )}
        <div className="text-gray-800 dark:text-gray-200">
          {children}
        </div>
      </div>
    </div>
  );
}