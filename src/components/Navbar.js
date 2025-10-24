import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/about', label: 'About' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/contact', label: 'Contact' }
  ];

  const getStartedItem = { path: '/pricing', label: 'Get Started' };

  return (
    <motion.nav 
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="nav-logo">
            <img src="/logo.svg" alt="Vuno" className="logo-image" />
          </Link>
          <div className="nav-menu">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="nav-right">
          <Link
            to={getStartedItem.path}
            className={`nav-link get-started-btn ${location.pathname === getStartedItem.path ? 'active' : ''}`}
          >
            {getStartedItem.label}
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;