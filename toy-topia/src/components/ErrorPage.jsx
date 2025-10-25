import React from 'react';
import { FaHome, FaSadTear } from 'react-icons/fa';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-purple-200 text-center px-4">
      {/* Big Icon */}
      <FaSadTear className="text-6xl text-purple-500 mb-4 animate-bounce" />

      {/* Error Code */}
      <h1 className="text-7xl font-extrabold text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mt-2">
        Oops! Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-600 mt-3 max-w-md">
        The page you’re looking for doesn’t exist or has been moved.  
        Please check the URL or go back to the homepage.
      </p>

      {/* Button */}
      <Link to="/" className="mt-6">
        <button className="btn btn-primary flex items-center gap-2">
          <FaHome className="text-lg" />
          Back to Home
        </button>
      </Link>
    </div>
    );
};

export default ErrorPage;