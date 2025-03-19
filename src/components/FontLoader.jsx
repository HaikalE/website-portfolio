import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

const FontLoader = () => {
  // Preload fonts for better performance
  useEffect(() => {
    const linkHeading = document.createElement('link');
    linkHeading.href = 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap';
    linkHeading.rel = 'stylesheet';
    
    const linkBody = document.createElement('link');
    linkBody.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap';
    linkBody.rel = 'stylesheet';
    
    document.head.appendChild(linkHeading);
    document.head.appendChild(linkBody);
    
    return () => {
      document.head.removeChild(linkHeading);
      document.head.removeChild(linkBody);
    };
  }, []);

  return (
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  );
};

export default FontLoader;