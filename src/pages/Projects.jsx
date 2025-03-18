import React, { useState, useEffect, useRef } from 'react';
import { FiFilter, FiSearch, FiX } from 'react-icons/fi';
import { ProjectSkeletonGrid } from '../components/ui/ProjectSkeleton';
import ResetButton from '../components/ui/ResetButton';
import SimpleProjectCard from '../components/ui/SimpleProjectCard';
import { projects } from '../data/projectsData';

const Projects = () => {
  // State for UI
  const [loading, setLoading] = useState(true);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const filterRef = useRef(null);
  
  // Get all unique categories
  const allCategories = ['All', ...new Set(projects.flatMap(project => 
    Array.isArray(project.category) ? project.category : [])
  )];
  
  // State for filtering
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle resize events
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setFiltersOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle clicks outside of filter menu on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target) && isMobile) {
        setFiltersOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile]);

  // Initialize filtered projects with all projects
  useEffect(() => {
    setFilteredProjects([...projects]);
    
    // Simulate loading for better UX
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  // Filter projects by category and search term
  const filterProjects = (category, search) => {
    let result = [...projects];
    
    // Apply category filter
    if (category !== 'All') {
      result = result.filter(project => 
        Array.isArray(project.category) && project.category.includes(category)
      );
    }
    
    // Apply search filter
    if (search) {
      const term = search.toLowerCase();
      result = result.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        (Array.isArray(project.technologies) && 
          project.technologies.some(tech => 
            typeof tech === 'string' && tech.toLowerCase().includes(term)
          )
        )
      );
    }
    
    return result;
  };

  // Handle category selection
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setFilteredProjects(filterProjects(category, searchTerm));
    if (isMobile) {
      setFiltersOpen(false);
    }
  };

  // Handle search input
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setFilteredProjects(filterProjects(activeCategory, value));
  };

  // Reset all filters
  const resetFilters = () => {
    setActiveCategory('All');
    setSearchTerm('');
    setFilteredProjects([...projects]);
    if (isMobile) {
      setFiltersOpen(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 md:py-24 bg-primary text-white">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="max-w-3xl mx-auto text-base md:text-lg opacity-90">
            Explore my portfolio of projects spanning various technologies and domains
          </p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-4 md:py-6 bg-white dark:bg-dark shadow-sm sticky top-16 z-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Mobile Filter Toggle */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setFiltersOpen(!filtersOpen)}
                className="flex items-center px-3 py-2 border rounded-md border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                aria-expanded={filtersOpen}
              >
                <FiFilter className="mr-2" />
                <span>Filters {activeCategory !== 'All' && `(1)`}</span>
              </button>
              <div className="ml-2">
                {activeCategory !== 'All' && (
                  <span className="px-2 py-1 bg-primary text-white text-xs rounded-full">
                    {activeCategory}
                  </span>
                )}
              </div>
            </div>

            {/* Desktop Category Filters */}
            <div className="hidden md:flex flex-wrap gap-2">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
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
            <div className="relative w-32 md:w-64">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full pl-8 pr-2 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-lighter focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <FiSearch className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-3.5 h-3.5" />
              {searchTerm && (
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => {
                    setSearchTerm('');
                    setFilteredProjects(filterProjects(activeCategory, ''));
                  }}
                >
                  <FiX className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Mobile Filters Panel */}
          {isMobile && (
            <div 
              ref={filterRef}
              className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
                filtersOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              <div className={`absolute bottom-0 left-0 right-0 bg-white dark:bg-dark rounded-t-xl p-4 transform transition-transform duration-300 ${
                filtersOpen ? 'translate-y-0' : 'translate-y-full'
              }`}>
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold">Filter Projects</h3>
                  <button 
                    onClick={() => setFiltersOpen(false)}
                    className="p-1 rounded-full bg-gray-100 dark:bg-dark-lighter"
                  >
                    <FiX />
                  </button>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium mb-2">Categories</h4>
                  <div className="flex flex-wrap gap-2">
                    {allCategories.map(category => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                          activeCategory === category 
                            ? 'bg-primary text-white'
                            : 'bg-gray-100 dark:bg-dark-light text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                <ResetButton onReset={resetFilters} />
              </div>
            </div>
          )}
        </div>
      </section>
      
      {/* Current Filters Summary (Desktop) */}
      {(activeCategory !== 'All' || searchTerm) && (
        <div className="hidden md:block bg-gray-50 dark:bg-dark-light border-t border-gray-200 dark:border-gray-700 py-2">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <span className="text-gray-500 dark:text-gray-400">Active filters:</span>
                {activeCategory !== 'All' && (
                  <span className="ml-2 px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                    {activeCategory}
                  </span>
                )}
                {searchTerm && (
                  <span className="ml-2 px-2 py-0.5 bg-gray-100 dark:bg-dark-lighter text-gray-700 dark:text-gray-300 rounded-full">
                    "{searchTerm}"
                  </span>
                )}
              </div>
              <ResetButton onReset={resetFilters} />
            </div>
          </div>
        </div>
      )}
      
      {/* Projects Grid */}
      <section className="py-8 md:py-16 bg-gray-50 dark:bg-dark-light min-h-screen">
        <div className="container mx-auto px-4">
          {loading ? (
            <ProjectSkeletonGrid count={6} />
          ) : filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
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
              <ResetButton onReset={resetFilters} />
            </div>
          )}

          {/* Results count */}
          {filteredProjects.length > 0 && !loading && (
            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
              Showing {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
              {activeCategory !== 'All' && ` in ${activeCategory}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;