import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiHome, FiBriefcase, FiUser, FiMail } from 'react-icons/fi';

const BottomNav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    {
      name: 'Home',
      path: '/',
      icon: FiHome,
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: FiBriefcase,
    },
    {
      name: 'About',
      path: '/about',
      icon: FiUser,
    },
    {
      name: 'Contact',
      path: '/contact',
      icon: FiMail,
    },
  ];
  
  return (
    <div className="md:hidden bottom-nav">
      {navItems.map(item => (
        <button
          key={item.name}
          onClick={() => navigate(item.path)}
          className={`nav-item tap-highlight-transparent ${
            location.pathname === item.path ? 'active' : ''
          }`}
          aria-label={item.name}
        >
          <item.icon />
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
};

export default BottomNav;