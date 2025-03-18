import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  // Log for debugging
  console.log("Rendering project:", project);
  
  // Error handling if project doesn't have required properties
  if (!project || !project.title) {
    console.error("Invalid project data:", project);
    return (
      <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
        <p className="text-red-500">Invalid project data</p>
      </div>
    );
  }

  // Placeholder image if project image isn't available
  const placeholderImage = `https://via.placeholder.com/600x400/3b82f6/ffffff?text=${project.title.replace(/\s+/g, '+')}`;
  
  // Animation delay based on index for staggered animation
  const animationDelay = `${index * 0.1}s`;
  
  return (
    <div 
      className="project-card relative overflow-hidden rounded-lg shadow-md h-72 reveal"
      style={{ animationDelay }}
    >
      {/* Project Image */}
      <img 
        src={project.imageUrl || placeholderImage} 
        alt={project.title}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = placeholderImage;
        }}
      />
      
      {/* Always-visible gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-60"></div>
      
      {/* Hover-enhanced overlay for interactive effect */}
      <div className="project-overlay absolute inset-0 bg-gradient-to-t from-black/90 to-transparent/60 opacity-0 transition-opacity duration-300"></div>
      
      {/* Content */}
      <div className="project-content absolute bottom-0 left-0 right-0 p-6 transform translate-y-0 md:translate-y-6 transition-transform duration-300">
        <div className="flex items-center text-gray-100 mb-2">
          <FiCalendar className="mr-1" />
          <span className="text-sm">{project.date || 'No date'}</span>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 text-shadow">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {Array.isArray(project.technologies) && project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-primary/90 text-white rounded-full shadow-sm"
            >
              {tech}
            </span>
          ))}
          {Array.isArray(project.technologies) && project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-700/90 text-white rounded-full shadow-sm">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        <Link 
          to={`/projects/${project.id}`} 
          className="inline-flex items-center text-white hover:text-primary-light transition-colors text-shadow tap-highlight-transparent"
        >
          View Project <FiArrowRight className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;