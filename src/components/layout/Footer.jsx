import React from 'react';
import { Link } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from 'react-icons/fi';
import { personalInfo } from '../../data/resumeData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 dark:bg-dark-light py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span className="text-primary mr-1">H</span>
              <span>Haikal</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Computer Science graduate with hands-on experience in data engineering and software development.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/HaikalE" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/muhammad-haikal-rahman/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/muhammadhaikalrahman_/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram className="w-5 h-5" />
              </a>
              <a 
                href={`mailto:${personalInfo.email}`}
                className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="not-italic text-gray-600 dark:text-gray-400 space-y-2">
              <p>{personalInfo.location}</p>
              <p>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {personalInfo.email}
                </a>
              </p>
              <p>
                <a 
                  href={`tel:${personalInfo.phone}`}
                  className="hover:text-primary dark:hover:text-primary transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </p>
            </address>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-600 dark:text-gray-400">
          <p>© {currentYear} Muhammad Haikal Rahman. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;