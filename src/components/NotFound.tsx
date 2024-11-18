import { Link } from 'react-router-dom';

function NotFound() {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <div className="text-center">
              <h2 className="text-6xl font-bold text-indigo-600">404</h2>
              <h1 className="mt-4 text-3xl font-bold text-gray-900">Page Not Found</h1>
              <p className="mt-2 text-base text-gray-500">
                The page you're looking for doesn't exist or has been moved.
              </p>
              <div className="mt-6">
                <Link
                  to="/"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Go back home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default NotFound;