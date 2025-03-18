import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import BottomNav from './BottomNav';

const Layout = ({ children }) => {
  const location = useLocation();

  // Scroll to top on route change and force refresh DOM
  useEffect(() => {
    // Scroll to top with smooth behavior on mobile
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Force a reflow/repaint (can help with rendering issues)
    document.body.style.display = 'none';
    // Store the offset height to use it and avoid ESLint error
    const height = document.body.offsetHeight; 
    // Log height to avoid unused var warning
    if (process.env.NODE_ENV === 'development') {
      console.log('Force reflow, document height:', height);
    }
    document.body.style.display = '';
    
    // Alternatively, this will force current route to rerender
    const currentPath = location.pathname;
    if (currentPath === '/') {
      // Trigger rerendering for home page
      const mainContent = document.querySelector('main');
      if (mainContent) {
        mainContent.style.opacity = '0';
        setTimeout(() => {
          mainContent.style.opacity = '1';
        }, 10);
      }
    }
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16 md:pt-20 pb-20 md:pb-0">
        {children}
      </main>
      {/* Show bottom navigation on mobile only */}
      <BottomNav />
      <Footer />
    </div>
  );
};

export default Layout;