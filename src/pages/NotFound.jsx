import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import Button from '../components/ui/Button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-light pt-16">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-md mx-auto text-center">
          <div className="mb-8">
            <div className="text-9xl font-bold text-primary">404</div>
            <h1 className="text-3xl font-bold mt-6 mb-3">Page Not Found</h1>
            <p className="text-gray-600 dark:text-gray-400">
              The page you are looking for might have been removed, had its name changed, 
              or is temporarily unavailable.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/" variant="primary">
              <FiHome className="mr-2" /> Back to Home
            </Button>
            <Button onClick={() => window.history.back()} variant="outline">
              <FiArrowLeft className="mr-2" /> Go Back
            </Button>
          </div>
          
          <div className="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-xl font-bold mb-4">Looking for something?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Check out these links instead:
            </p>
            <ul className="flex flex-col gap-2">
              <li>
                <Link to="/" className="text-primary hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/projects" className="text-primary hover:underline">Projects</Link>
              </li>
              <li>
                <Link to="/about" className="text-primary hover:underline">About Me</Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;