import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiCalendar, FiLink, FiGithub, FiExternalLink, FiPlayCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';

const getTechColor = (tech) => {
  // Map common technologies to specific colors for more visual distinction
  const techColors = {
    "React": "#61DAFB",
    "JavaScript": "#F7DF1E",
    "Python": "#3776AB",
    "Node.js": "#339933",
    "Flutter": "#02569B",
    "Kotlin": "#7F52FF",
    "Java": "#007396",
    "HTML": "#E34F26",
    "CSS": "#1572B6",
    "PHP": "#777BB4",
    "Mobile": "#FF4785",
    "Web": "#4285F4",
    "AI": "#FF9900",
    "Blockchain": "#627EEA",
    "Security": "#D93F3F",
    "Android": "#3DDC84",
    "Full Stack": "#7B68EE"
  };
  
  // Return specific color or a default
  return techColors[tech] || "#3B82F6";
};

// Helper function to get appropriate icon for different URL types
const getUrlIcon = (label) => {
  const lowercaseLabel = label.toLowerCase();
  if (lowercaseLabel.includes('github')) return FiGithub;
  if (lowercaseLabel.includes('demo') || lowercaseLabel.includes('live')) return FiPlayCircle;
  if (lowercaseLabel.includes('doc')) return FiPlayCircle;
  return FiExternalLink;
};

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
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
    <motion.div 
      className="reveal overflow-hidden rounded-xl shadow-lg h-72 bg-white dark:bg-dark-light"
      style={{ animationDelay }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 50
      }}
      viewport={{ once: true, margin: "-100px" }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      <div className="relative w-full h-full overflow-hidden">
        {/* Project Image with zoom effect */}
        <motion.div 
          className="absolute inset-0"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={project.imageUrl || placeholderImage} 
            alt={project.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = placeholderImage;
            }}
          />
        </motion.div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80"></div>
        
        {/* Content */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          <motion.div 
            animate={{ 
              y: isHovered ? -10 : 0,
              opacity: 1
            }} 
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center text-gray-100 mb-2">
              <FiCalendar className="mr-1" />
              <span className="text-sm">{project.date || 'No date'}</span>
            </div>
            
            <h3 className="text-xl font-bold text-white mb-3 text-shadow">{project.title}</h3>
            
            {/* Technologies - with custom colors */}
            <div className="flex flex-wrap gap-2 mb-4">
              {Array.isArray(project.technologies) && project.technologies.slice(0, 3).map((tech, index) => (
                <motion.span 
                  key={index} 
                  className="text-xs px-2 py-1 rounded-full text-white shadow-sm"
                  style={{ backgroundColor: getTechColor(tech) }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{ 
                    y: -2,
                    boxShadow: "0 5px 10px rgba(0,0,0,0.2)" 
                  }}
                >
                  {tech}
                </motion.span>
              ))}
              {Array.isArray(project.technologies) && project.technologies.length > 3 && (
                <span className="text-xs px-2 py-1 bg-gray-700/90 text-white rounded-full shadow-sm">
                  +{project.technologies.length - 3}
                </span>
              )}
            </div>
            
            {/* Project links indicator */}
            {project.projectUrls && project.projectUrls.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-3">
                {project.projectUrls.slice(0, 2).map((urlItem, index) => {
                  const IconComponent = getUrlIcon(urlItem.label);
                  return (
                    <a 
                      key={index}
                      href={urlItem.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full px-2 py-1 transition-colors"
                    >
                      <IconComponent className="mr-1 w-3 h-3" />
                      <span>{urlItem.label}</span>
                    </a>
                  );
                })}
              </div>
            )}
          </motion.div>
          
          {/* View Project Button with Hover Effect */}
          <motion.div
            animate={{ 
              y: isHovered ? 0 : 10,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <Link 
              to={`/projects/${project.id}`} 
              className="group inline-flex items-center text-white bg-primary/80 hover:bg-primary rounded-full px-4 py-2 transition-colors"
            >
              <span>View Project</span>
              <motion.div
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <FiArrowRight className="ml-2" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;