import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedStats = () => {
  const [currentStatIndex, setCurrentStatIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cryptoStats = [
    {
      id: 1,
      title: "Total Stablecoin Supply",
      value: "$300B+",
      description: "The total stablecoin supply passed US $300 billion in 2025",
      icon: "fas fa-coins",
      color: "#007ea7",
      trend: "+25% YoY"
    },
    {
      id: 2,
      title: "DeFi Total Value Locked",
      value: "$180B+",
      description: "DeFi protocols now manage over $180 billion in total value locked",
      icon: "fas fa-lock",
      color: "#80ced7",
      trend: "+40% YoY"
    },
    {
      id: 3,
      title: "Global Crypto Users",
      value: "580M+",
      description: "More than 580 million people worldwide now use cryptocurrency",
      icon: "fas fa-users",
      color: "#9ad1d4",
      trend: "+15% YoY"
    },
    {
      id: 4,
      title: "Institutional Adoption",
      value: "85%",
      description: "85% of Fortune 500 companies are exploring blockchain technology",
      icon: "fas fa-building",
      color: "#007ea7",
      trend: "+60% YoY"
    },
    {
      id: 5,
      title: "Cross-Border Payments",
      value: "$1.2T",
      description: "Crypto facilitates over $1.2 trillion in cross-border payments annually",
      icon: "fas fa-globe",
      color: "#80ced7",
      trend: "+200% YoY"
    },
    {
      id: 6,
      title: "Yield Farming APY",
      value: "12-25%",
      description: "DeFi yield farming offers 12-25% APY compared to 0.01% traditional savings",
      icon: "fas fa-seedling",
      color: "#9ad1d4",
      trend: "10,000x Better"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentStatIndex((prev) => (prev + 1) % cryptoStats.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const currentStat = cryptoStats[currentStatIndex];

  return (
    <motion.div 
      className="animated-stats-widget"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="stats-header">
        <h3>Crypto Industry Growth</h3>
        <p className="stats-subtitle">Real-time insights into the expanding digital economy</p>
      </div>
      
      <div className="stats-container">
        <motion.div 
          key={currentStat.id}
          className="current-stat"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.5 }}
        >
          <div className="stat-icon" style={{ backgroundColor: currentStat.color }}>
            <i className={currentStat.icon}></i>
          </div>
          
          <div className="stat-content">
            <motion.div 
              className="stat-value"
              key={currentStat.value}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              {currentStat.value}
            </motion.div>
            
            <h4 className="stat-title">{currentStat.title}</h4>
            
            <p className="stat-description">{currentStat.description}</p>
            
            <div className="stat-trend">
              <i className="fas fa-arrow-up"></i>
              <span>{currentStat.trend}</span>
            </div>
          </div>
        </motion.div>
      </div>
      
      <div className="stats-indicators">
        {cryptoStats.map((stat, index) => (
          <motion.div
            key={stat.id}
            className={`indicator ${index === currentStatIndex ? 'active' : ''}`}
            onClick={() => setCurrentStatIndex(index)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div 
              className="indicator-dot" 
              style={{ backgroundColor: stat.color }}
            ></div>
            <span className="indicator-label">{stat.title}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="stats-scroll-hint">
        <i className="fas fa-mouse"></i>
        <span>Click indicators to explore different metrics</span>
      </div>
      
      <div className="stats-summary">
        <div className="summary-item">
          <div className="summary-value">6</div>
          <div className="summary-label">Key Metrics</div>
        </div>
        <div className="summary-item">
          <div className="summary-value">$1.5T+</div>
          <div className="summary-label">Total Market</div>
        </div>
        <div className="summary-item">
          <div className="summary-value">24/7</div>
          <div className="summary-label">Live Updates</div>
        </div>
      </div>
    </motion.div>
  );
};

export default AnimatedStats;
