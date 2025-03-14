import React from 'react';
import { Link } from 'react-router-dom';

const SimpleProjectCard = ({ project, index }) => {
  if (!project) return null;
  
  return (
    <div className="bg-white dark:bg-dark-light rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
      <div className="p-5">
        {project.date && (
          <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
            {project.date}
          </div>
        )}
        
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {Array.isArray(project.technologies) && project.technologies.slice(0, 3).map((tech, idx) => (
            <span 
              key={idx} 
              className="inline-block px-2 py-1 bg-primary/20 dark:bg-primary/30 text-primary text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
          {Array.isArray(project.technologies) && project.technologies.length > 3 && (
            <span className="inline-block px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <Link 
          to={`/projects/${project.id}`}
          className="inline-block text-primary hover:text-primary-dark font-medium transition-colors"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default SimpleProjectCard;