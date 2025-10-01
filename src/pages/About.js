import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About LoopFi
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Revolutionizing personal finance through DeFi innovation
          </motion.p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="content-grid">
            <motion.div 
              className="content-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Mission</h2>
              <p>
                LoopFi was born from a simple observation: why should your money sit idle in checking accounts 
                earning 0.01% interest while you pay bills manually? We believe your expenses should work for you, 
                not against you.
              </p>
              <p>
                Our mission is to democratize access to DeFi yields by making them as simple as setting up 
                autopay. We're building the future where every dollar earns its keep, automatically.
              </p>
            </motion.div>
            
            <motion.div 
              className="content-stats"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="stat-card">
                <div className="stat-number">$0</div>
                <div className="stat-label">Setup Fees</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">12-25%</div>
                <div className="stat-label">APY Range</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Automation</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
