import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout
import Layout from './components/layout/Layout';
import FontLoader from './components/FontLoader';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import NotFound from './pages/NotFound';
import FontTester from './components/FontTester';

function App() {
  // Initialize scroll reveal animations
  useEffect(() => {
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
  }, []);

  return (
    <BrowserRouter>
      <FontLoader />
      <Layout>
        <Routes>
          <Route path="/" element={<Home key="home-page" />} />
          <Route path="/projects" element={<Projects key="projects-page" />} />
          <Route path="/projects/:id" element={<ProjectDetail key="project-detail-page" />} />
          <Route path="/about" element={<About key="about-page" />} />
          <Route path="/certificates" element={<Certificates key="certificates-page" />} />
          <Route path="/contact" element={<Contact key="contact-page" />} />
          <Route path="/fonts" element={<FontTester key="font-tester-page" />} />
          <Route path="*" element={<NotFound key="not-found-page" />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;