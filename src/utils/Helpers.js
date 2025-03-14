/**
 * Format date to readable string
 * @param {string} dateString - Date string
 * @returns {string} - Formatted date
 */
export const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };
  
  /**
   * Capitalize first letter of each word
   * @param {string} str - String to capitalize
   * @returns {string} - Capitalized string
   */
  export const capitalizeWords = (str) => {
    return str
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };
  
  /**
   * Truncate text to specific length with ellipsis
   * @param {string} text - Text to truncate
   * @param {number} length - Max length 
   * @returns {string} - Truncated text
   */
  export const truncateText = (text, length = 100) => {
    if (text.length <= length) return text;
    return `${text.substring(0, length)}...`;
  };
  
  /**
   * Scroll to element by ID with smooth behavior
   * @param {string} id - Element ID
   */
  export const scrollToElement = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  /**
   * Group array of objects by specific key
   * @param {Array} array - Array to group
   * @param {string} key - Key to group by
   * @returns {Object} - Grouped object
   */
  export const groupBy = (array, key) => {
    return array.reduce((acc, item) => {
      const groupKey = item[key];
      if (!acc[groupKey]) {
        acc[groupKey] = [];
      }
      acc[groupKey].push(item);
      return acc;
    }, {});
  };
  
  /**
   * Add animation classes to elements when they come into view
   */
  export const initScrollReveal = () => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', revealOnScroll);
    
    // Trigger once on load
    revealOnScroll();
    
    return () => window.removeEventListener('scroll', revealOnScroll);
  };
  
  /**
   * Get random items from array
   * @param {Array} array - Array to get items from
   * @param {number} count - Number of items to get
   * @returns {Array} - Random items
   */
  export const getRandomItems = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };
  
  /**
   * Get years of experience based on start date
   * @param {string} startDate - Start date string (YYYY-MM-DD)
   * @returns {number} - Years of experience
   */
  export const getYearsOfExperience = (startDate) => {
    const start = new Date(startDate);
    const now = new Date();
    const diffInMs = now - start;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365);
    return Math.floor(diffInYears);
  };
  
  /**
   * Debounce function to limit function calls
   * @param {Function} func - Function to debounce
   * @param {number} wait - Wait time in ms
   * @returns {Function} - Debounced function
   */
  export const debounce = (func, wait = 300) => {
    let timeout;
    
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };