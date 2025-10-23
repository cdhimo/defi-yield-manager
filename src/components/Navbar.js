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
    { path: '/pricing', label: 'Pricing' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-mint-pale/98 backdrop-blur-md shadow-lg shadow-mint-light/15' 
          : 'bg-forest-dark/95 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-5 flex justify-between items-center h-16">
        <Link to="/" className="text-2xl font-bold text-mint-light hover:text-mint-pale transition-colors">
          LoopFi
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition-colors relative ${
                location.pathname === item.path 
                  ? 'text-mint-pale' 
                  : 'text-mint-light hover:text-mint-pale'
              }`}
            >
              {item.label}
              {location.pathname === item.path && (
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mint-pale rounded-full"
                  layoutId="activeTab"
                  transition={{ duration: 0.3 }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
