import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'Product',
      links: [
        { to: '/pricing', label: 'Pricing' },
        { to: '/how-it-works', label: 'How It Works' },
        { to: '#', label: 'FAQ' }
      ]
    },
    {
      title: 'Support',
      links: [
        { to: '#', label: 'Help Center' },
        { to: '/contact', label: 'Contact Us' },
        { to: '#', label: 'Status' },
        { to: '#', label: 'Security' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { to: '#', label: 'Terms of Service' },
        { to: '#', label: 'Privacy Policy' },
        { to: '#', label: 'Disclaimer' }
      ]
    }
  ];

  const socialLinks = [
    { icon: 'fab fa-twitter', href: '#' },
    { icon: 'fab fa-discord', href: '#' },
    { icon: 'fab fa-telegram', href: '#' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="footer-logo">
              <img src="/logo.svg" alt="Vuno" className="logo-image" />
            </div>
            <p>Making your money work for you, one bill at a time.</p>
            <div className="social-links">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {footerSections.map((section, index) => (
            <motion.div 
              key={index}
              className="footer-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h4>{section.title}</h4>
              <ul>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link to={link.to}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="footer-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p>&copy; 2024 Vuno. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
