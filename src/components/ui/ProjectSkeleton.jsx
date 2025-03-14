import React from 'react';

const ProjectSkeleton = () => {
  return (
    <div className="rounded-lg shadow-md overflow-hidden h-72 bg-white dark:bg-dark">
      {/* Image loading placeholder */}
      <div className="w-full h-full relative overflow-hidden">
        <div className="absolute inset-0 bg-gray-200 dark:bg-dark-lighter animate-pulse"></div>
        
        {/* Content placeholders */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center mb-2">
            <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-700 mr-2"></div>
            <div className="h-4 w-24 bg-gray-300 dark:bg-gray-700 rounded"></div>
          </div>
          
          <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-700 rounded mb-3"></div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="h-5 w-16 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="h-5 w-20 rounded-full bg-gray-300 dark:bg-gray-700"></div>
            <div className="h-5 w-14 rounded-full bg-gray-300 dark:bg-gray-700"></div>
          </div>
          
          <div className="h-5 w-28 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export const ProjectSkeletonGrid = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Array(count).fill(0).map((_, index) => (
        <ProjectSkeleton key={index} />
      ))}
    </div>
  );
};

export default ProjectSkeleton;