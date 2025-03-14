import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiArrowDown } from 'react-icons/fi';
import { personalInfo } from '../../data/resumeData';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center py-20 bg-grid">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          {/* Text content - 3 columns on lg screens */}
          <div className="lg:col-span-3 reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="block">Hi, I'm</span> 
              <span className="text-primary">{personalInfo.name.split(' ')[0]}</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 h-16">
              <TypeAnimation
                sequence={[
                  'Software Developer',
                  1500,
                  'Data Engineer',
                  1500,
                  'Computer Science Graduate',
                  1500,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
              />
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              {personalInfo.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <Button to="/projects" variant="primary" size="lg">
                View My Projects
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
            
            <div className="flex space-x-6">
              <a
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <FiTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Image - 2 columns on lg screens */}
          <div className="lg:col-span-2 flex justify-center reveal">
            <div className="relative">
              {/* Profile image with colorful border */}
              <div className="w-64 h-64 md:w-80 md:h-80 border-8 border-primary/20 rounded-full overflow-hidden">
                <img 
                  src="/assets/images/profile.jpg" 
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://ui-avatars.com/api/?name=${personalInfo.name.replace(' ', '+')}&size=400&background=3b82f6&color=ffffff`;
                  }}
                />
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full -z-10"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full -z-10"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer">
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="flex flex-col items-center"
        >
          <span className="text-sm mb-2 text-gray-600 dark:text-gray-400">Scroll Down</span>
          <FiArrowDown className="animate-bounce w-6 h-6 text-primary" />
        </Link>
      </div>
    </section>
  );
};

export default Hero;