import React, { useState, useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
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
    if (path === '/' && location.pathname !== '/') {
      navigate(path);
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  // Determine if navbar should have background
  const shouldHaveBackground = scrollPosition > 50 || isMenuOpen;

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        shouldHaveBackground 
          ? 'backdrop-blur-lg bg-white/70 dark:bg-dark/80 shadow-lg py-3' 
          : 'backdrop-blur-sm bg-white/30 dark:bg-dark/30 py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <motion.div 
          onClick={() => handleNavigation('/')} 
          className="text-2xl font-bold flex items-center cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span 
            className="text-primary mr-1"
            animate={{ 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          >H</motion.span>
          <span className={shouldHaveBackground ? '' : 'text-gray-800 dark:text-white'}>Haikal</span>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              onClick={() => handleNavigation(link.path)}
              className={`font-medium transition-colors cursor-pointer ${
                location.pathname === link.path
                  ? 'text-primary'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary'
              }`}
              whileHover={{ 
                scale: 1.1,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  className="h-0.5 bg-primary mt-0.5"
                  layoutId="underline"
                />
              )}
            </motion.div>
          ))}
          
          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-dark-lighter text-gray-700 dark:text-gray-300 transition-colors duration-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {theme === 'dark' ? (
              <motion.div
                initial={{ rotate: -45 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiSun className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ rotate: 45 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FiMoon className="w-5 h-5" />
              </motion.div>
            )}
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <motion.button
            onClick={toggleTheme}
            className="p-2 mr-2 rounded-full bg-gray-100 dark:bg-dark-lighter text-gray-700 dark:text-gray-300 transition-colors duration-200"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? <FiSun className="w-5 h-5" /> : <FiMoon className="w-5 h-5" />}
          </motion.button>
          
          <motion.button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 dark:text-gray-300"
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden absolute w-full bg-white/95 dark:bg-dark-light/95 backdrop-blur-md shadow-lg"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container py-4 space-y-4 px-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    transition: { delay: index * 0.1 }
                  }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Link
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
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;