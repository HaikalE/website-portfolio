import React, { useState, useContext, useEffect } from 'react';
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

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const handleNavigation = (path) => {
    // If navigating to home page and already on another page,
    // use a stronger approach with reload
    if (path === '/' && location.pathname !== '/') {
      navigate(path);
      // Use this approach only if other solutions fail
      window.location.reload();
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  // Determine if navbar should have background
  // Now it will always have at least some background, more solid when scrolled or menu open
  const shouldHaveBackground = scrollPosition > 50 || isMenuOpen;

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        shouldHaveBackground 
          ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-white/40 dark:bg-dark/40 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <div 
          onClick={() => handleNavigation('/')} 
          className="text-2xl font-bold flex items-center cursor-pointer"
        >
          <span className="text-primary mr-1">H</span>
          <span className={shouldHaveBackground ? '' : 'text-gray-800 dark:text-white'}>Haikal</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
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
            className="p-2 rounded-md text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden absolute w-full bg-white/95 dark:bg-dark-light/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'opacity-100 translate-y-0 shadow-md' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="container py-4 space-y-4 px-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-2 font-medium transition-colors ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;