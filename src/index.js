import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

// Preload fonts
const preloadFonts = () => {
  const links = [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com',
    },
    {
      rel: 'preconnect',
      href: 'https://fonts.gstatic.com',
      crossOrigin: 'anonymous',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap',
    }
  ];

  links.forEach(linkData => {
    const link = document.createElement('link');
    Object.entries(linkData).forEach(([key, value]) => {
      link[key] = value;
    });
    document.head.appendChild(link);
  });
};

// Cek tema dari localStorage saat awal load
const initializeTheme = () => {
  // Cek localStorage
  const theme = localStorage.getItem('theme');
  
  // Cek preferensi sistem
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  // Atur kelas dark pada html
  if (theme === 'dark' || (!theme && prefersDarkMode)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

// Run theme and font initialization
initializeTheme();
preloadFonts();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);