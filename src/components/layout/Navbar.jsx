import React, { useState, useContext, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { ThemeContext } from '../../context/ThemeContext';
import useScrollPosition from '../../hooks/useScrollPosition';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { scrollPosition } = useScrollPosition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef(null);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    
    // When closing menu, enable body scroll
    document.body.style.overflow = '';
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
    // Prevent body scroll when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  const handleNavigation = (path) => {
    // If navigating to home page and already on another page, 
    // use stronger approach with reload
    if (path === '/' && location.pathname !== '/') {
      navigate(path);
      // Only use this approach if other solutions fail
      window.location.reload();
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrollPosition > 50 
          ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div 
          onClick={() => handleNavigation('/')} 
          className="text-2xl font-bold flex items-center cursor-pointer"
        >
          <span className="text-primary mr-1">H</span>
          <span>Haikal</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              onClick={() => handleNavigation(link.path)}
              className={`font-medium transition-colors cursor-pointer ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
            >
              {link.name}
            </div>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-lighter text-gray-700 dark:text-gray-300 transition-colors duration-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-dark-lighter text-gray-700 dark:text-gray-300 transition-colors duration-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </button>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-dark"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation - Fullscreen Approach */}
      <div
        ref={menuRef}
        className={`md:hidden fixed inset-0 bg-white dark:bg-dark z-40 transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
        style={{ top: '61px' }} // Adjust based on your header height
      >
        <div className="container h-full py-8 flex flex-col">
          <div className="space-y-6 px-4">
            {navLinks.map((link) => (
              <div
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className={`text-xl font-medium transition-colors py-3 border-b border-gray-100 dark:border-gray-800 ${
                  location.pathname === link.path
                    ? 'text-primary border-primary'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {link.name}
              </div>
            ))}
          </div>
          
          {/* Mobile Social Links */}
          <div className="mt-auto px-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Connect</h3>
            <div className="flex space-x-5">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/in/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary"
                aria-label="LinkedIn" 
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a 
                href="mailto:muhammadhaikalrahman81@gmail.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-primary"
                aria-label="Email" 
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;