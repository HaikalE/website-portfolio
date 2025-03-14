import React, { useState, useEffect } from 'react';
import { ProjectSkeletonGrid } from '../components/ui/ProjectSkeleton';
import ResetButton from '../components/ui/ResetButton';
import SimpleProjectCard from '../components/ui/SimpleProjectCard';
import { projects } from '../data/projectsData';

const Projects = () => {
  // State for UI
  const [loading, setLoading] = useState(true);
  
  // Get all unique categories
  const allCategories = ['All', ...new Set(projects.flatMap(project => 
    Array.isArray(project.category) ? project.category : [])
  )];
  
  // State for filtering
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Initialize filtered projects with all projects
  useEffect(() => {
    setFilteredProjects([...projects]);
    
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
          <p className="max-w-3xl mx-auto text-lg opacity-90">
            Explore my portfolio of projects spanning various technologies and domains
          </p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-10 bg-white dark:bg-dark shadow-sm sticky top-16 z-10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => {
                    setActiveCategory(category);
                    // Filter projects directly
                    if (category === 'All') {
                      setFilteredProjects([...projects]);
                    } else {
                      const filtered = projects.filter(project => 
                        Array.isArray(project.category) && project.category.includes(category)
                      );
                      setFilteredProjects(filtered);
                    }
                  }}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 dark:bg-dark-light text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-lighter'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            {/* Search */}
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearchTerm(value);
                    
                    // Filter projects directly
                    let filtered = [...projects];
                    
                    // Apply category filter first
                    if (activeCategory !== 'All') {
                      filtered = filtered.filter(project => 
                        Array.isArray(project.category) && project.category.includes(activeCategory)
                      );
                    }
                    
                    // Then apply search filter
                    if (value) {
                      const term = value.toLowerCase();
                      filtered = filtered.filter(project => 
                        project.title.toLowerCase().includes(term) || 
                        project.description.toLowerCase().includes(term) ||
                        (Array.isArray(project.technologies) && 
                          project.technologies.some(tech => 
                            typeof tech === 'string' && tech.toLowerCase().includes(term)
                          )
                        )
                      );
                    }
                    
                    setFilteredProjects(filtered);
                  }}
                  className="w-full md:w-64 pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-lighter focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <svg 
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 dark:text-gray-400" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-16 bg-gray-50 dark:bg-dark-light min-h-screen">
        <div className="container mx-auto">
          {loading ? (
            <ProjectSkeletonGrid count={6} />
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <SimpleProjectCard key={project.id || index} project={project} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-4">No projects found</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Try adjusting your search or filter criteria
              </p>
              <ResetButton onReset={() => {
                setActiveCategory('All');
                setSearchTerm('');
                setFilteredProjects([...projects]);
              }} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;