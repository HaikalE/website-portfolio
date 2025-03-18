import React, { useEffect, useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Hero from '../components/sections/Hero';
import ProjectCard from '../components/ui/ProjectCard';
import Timeline from '../components/ui/Timeline';
import Badge from '../components/ui/Badge';
import Button from '../components/ui/Button';
import CredentialDisplay from '../components/ui/CredentialDisplay';
import { projects } from '../data/projectsData';
import { experience, education, skills, certifications } from '../data/resumeData';

const Home = () => {
  const [isReady, setIsReady] = useState(false);

  // Get featured projects
  const featuredProjects = projects
    .filter(project => project.featured)
    .slice(0, 6);
  
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Force component to fully render after mounting
  useEffect(() => {
    // Quick timeout to ensure the DOM is ready
    setTimeout(() => {
      setIsReady(true);
    }, 50);
  }, []);
  
  return (
    <div className={`transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <section id="about" className="section bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              I'm a Computer Science graduate with expertise in data engineering and software development.
              With a passion for building secure and efficient applications, I strive to create innovative
              solutions that make a positive impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Education */}
            <div className="reveal">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                </span>
                Education
              </h3>
              <Timeline items={education} type="education" />
            </div>
            
            {/* Experience */}
            <div className="reveal">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
                  <span className="w-3 h-3 bg-secondary rounded-full"></span>
                </span>
                Experience
              </h3>
              <Timeline items={experience} type="work" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="section bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold mb-4">My Skills</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Here are the technologies and tools I work with on a regular basis
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <div key={category} className="bg-white dark:bg-dark p-6 rounded-lg shadow-md reveal">
                <h3 className="text-xl font-bold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {categorySkills.map((skill, index) => (
                    <Badge key={index} variant="primary">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/about" variant="outline">
              Learn More About Me <FiArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section bg-white dark:bg-dark">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Check out some of my recent work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button to="/projects" variant="primary">
              View All Projects <FiArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Certifications Section */}
      <section id="certifications" className="section bg-gray-50 dark:bg-dark-light">
        <div className="container mx-auto">
          <div className="text-center mb-16 reveal">
            <h2 className="text-3xl font-bold mb-4">Certifications</h2>
            <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
            <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
              Professional certifications I've earned
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-dark p-6 rounded-lg shadow-md reveal border-t-4 border-primary"
              >
                <h3 className="text-lg font-bold mb-2">{cert.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  {cert.issuer} • {cert.year}
                </p>
                <CredentialDisplay credentialId={cert.credentialId} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto text-center reveal">
          <h2 className="text-3xl font-bold mb-6">Let's Work Together</h2>
          <p className="max-w-2xl mx-auto text-lg mb-8">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
          <Button to="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
            Get In Touch
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;