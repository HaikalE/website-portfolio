import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink, FiCalendar, FiGithub, FiCode, FiPlayCircle, FiFileText } from 'react-icons/fi';
import { projects } from '../data/projectsData';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';

// Helper function to get appropriate icon for different URL types
const getUrlIcon = (label) => {
  const lowercaseLabel = label.toLowerCase();
  if (lowercaseLabel.includes('github')) return FiGithub;
  if (lowercaseLabel.includes('demo') || lowercaseLabel.includes('live')) return FiPlayCircle;
  if (lowercaseLabel.includes('doc')) return FiFileText;
  if (lowercaseLabel.includes('store')) return FiPlayCircle;
  return FiExternalLink;
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [relatedProjects, setRelatedProjects] = useState([]);

  useEffect(() => {
    // Find project with matching id
    const projectId = parseInt(id);
    const foundProject = projects.find(p => p.id === projectId);
    
    if (foundProject) {
      setProject(foundProject);
      
      // Find related projects (same category)
      const related = projects
        .filter(p => 
          p.id !== projectId && 
          p.category.some(cat => foundProject.category.includes(cat))
        )
        .slice(0, 3);
      
      setRelatedProjects(related);
    }
    
    setIsLoading(false);
  }, [id]);

  // Handle case when project not found
  if (!isLoading && !project) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-light">
        <div className="text-center max-w-xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            The project you're looking for doesn't exist or has been removed.
          </p>
          <Button to="/projects" variant="primary">
            Back to Projects
          </Button>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50 dark:bg-dark-light">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Loading project...</p>
        </div>
      </div>
    );
  }

  // Placeholder image if project image is not available
  const placeholderImage = `https://via.placeholder.com/1200x600/3b82f6/ffffff?text=${project.title.replace(/\s+/g, '+')}`;

  return (
    <div className="pt-20 bg-gray-50 dark:bg-dark-light">
      {/* Header with improved text readability */}
      <div className="w-full h-80 md:h-96 relative">
        <img 
          src={project.imageUrl || placeholderImage} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30 flex items-center justify-center">
          <div className="text-center text-white max-w-3xl mx-auto px-4">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-shadow">{project.title}</h1>
            <div className="flex flex-wrap justify-center gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-primary/70 rounded-full text-sm shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto py-12">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Main Content */}
          <div className="w-full md:w-2/3">
            <div className="bg-white dark:bg-dark p-8 rounded-lg shadow-md mb-8">
              <div className="flex items-center text-gray-600 dark:text-gray-400 mb-6">
                <FiCalendar className="mr-2" /> 
                <span>{project.date}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-8">
                {project.description}
              </p>
              
              {project.features && project.features.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Key Features</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 mb-8">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
              
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="primary">{tech}</Badge>
                ))}
              </div>
              
              {/* Project URLs Section */}
              {project.projectUrls && project.projectUrls.length > 0 && (
                <>
                  <h2 className="text-2xl font-bold mb-4">Project Links</h2>
                  <div className="flex flex-wrap gap-4 mb-8">
                    {project.projectUrls.map((urlItem, index) => {
                      const IconComponent = getUrlIcon(urlItem.label);
                      return (
                        <Button
                          key={index}
                          href={urlItem.url}
                          variant={index === 0 ? "primary" : "outline"}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <IconComponent className="mr-2" /> {urlItem.label}
                        </Button>
                      );
                    })}
                  </div>
                </>
              )}
              
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => navigate('/projects')} 
                  variant="outline"
                >
                  <FiArrowLeft className="mr-2" /> Back to Projects
                </Button>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            {/* Related Projects */}
            {relatedProjects.length > 0 && (
              <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {relatedProjects.map(related => (
                    <Link 
                      key={related.id} 
                      to={`/projects/${related.id}`}
                      className="block group"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="w-16 h-16 rounded-md overflow-hidden flex-shrink-0">
                          <img 
                            src={related.imageUrl || `https://via.placeholder.com/64x64/3b82f6/ffffff?text=${related.title.charAt(0)}`} 
                            alt={related.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <h4 className="font-medium group-hover:text-primary transition-colors">
                            {related.title}
                          </h4>
                          <div className="flex gap-2 mt-1">
                            {related.technologies.slice(0, 2).map((tech, i) => (
                              <span key={i} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-dark-lighter rounded-full">
                                {tech}
                              </span>
                            ))}
                            {related.technologies.length > 2 && (
                              <span className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-dark-lighter rounded-full">
                                +{related.technologies.length - 2}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            
            {/* Categories */}
            <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                {project.category.map((cat, index) => (
                  <Link 
                    key={index} 
                    to={`/projects?category=${cat}`}
                    className="px-3 py-1 bg-gray-100 dark:bg-dark-lighter rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;