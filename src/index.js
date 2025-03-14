import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';

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

// Jalankan inisialisasi tema
initializeTheme();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);