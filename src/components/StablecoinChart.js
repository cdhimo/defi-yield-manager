import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const StablecoinChart = () => {
  const [currentSupply, setCurrentSupply] = useState(0);
  const [chartData, setChartData] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  // Simulate stablecoin supply data (in billions)
  const supplyData = [
    { month: 'Jan 2023', supply: 120 },
    { month: 'Feb 2023', supply: 125 },
    { month: 'Mar 2023', supply: 130 },
    { month: 'Apr 2023', supply: 135 },
    { month: 'May 2023', supply: 140 },
    { month: 'Jun 2023', supply: 145 },
    { month: 'Jul 2023', supply: 150 },
    { month: 'Aug 2023', supply: 155 },
    { month: 'Sep 2023', supply: 160 },
    { month: 'Oct 2023', supply: 165 },
    { month: 'Nov 2023', supply: 170 },
    { month: 'Dec 2023', supply: 175 },
    { month: 'Jan 2024', supply: 180 },
    { month: 'Feb 2024', supply: 185 },
    { month: 'Mar 2024', supply: 190 },
    { month: 'Apr 2024', supply: 195 },
    { month: 'May 2024', supply: 200 },
    { month: 'Jun 2024', supply: 205 },
    { month: 'Jul 2024', supply: 210 },
    { month: 'Aug 2024', supply: 215 },
    { month: 'Sep 2024', supply: 220 },
    { month: 'Oct 2024', supply: 225 },
    { month: 'Nov 2024', supply: 230 },
    { month: 'Dec 2024', supply: 235 }
  ];

  useEffect(() => {
    generateChartData();
    animateSupply();
  }, []);

  const generateChartData = () => {
    const maxSupply = Math.max(...supplyData.map(d => d.supply));
    const minSupply = Math.min(...supplyData.map(d => d.supply));
    const range = maxSupply - minSupply;
    
    const points = supplyData.map((point, index) => {
      const x = (index / (supplyData.length - 1)) * 280 + 10;
      const y = 110 - ((point.supply - minSupply) / range) * 80;
      return `${x},${Math.max(y, 10)}`;
    });
    
    setChartData(`M ${points.join(' L ')}`);
  };

  const animateSupply = () => {
    setIsAnimating(true);
    let current = 0;
    const target = supplyData[supplyData.length - 1].supply;
    const increment = target / 100;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
        setIsAnimating(false);
      }
      setCurrentSupply(Math.floor(current));
    }, 20);
  };

  const formatSupply = (supply) => {
    return `$${supply}B`;
  };

  return (
    <motion.div 
      className="stablecoin-chart"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="chart-widget">
        <div className="chart-header">
          <h3>Global Stablecoin Supply</h3>
          <div className="chart-subtitle">Steady growth in digital dollar adoption</div>
        </div>
        
        <motion.div 
          className="chart-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <svg width="100%" height="200" viewBox="0 0 300 200">
            <defs>
              <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor:'#96e072', stopOpacity:0.8}} />
                <stop offset="100%" style={{stopColor:'#96e072', stopOpacity:0.1}} />
              </linearGradient>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor:'#96e072', stopOpacity:1}} />
                <stop offset="50%" style={{stopColor:'#3da35d', stopOpacity:1}} />
                <stop offset="100%" style={{stopColor:'#3e8914', stopOpacity:1}} />
              </linearGradient>
            </defs>
            
            {/* Grid lines */}
            <g className="grid-lines">
              {[0, 25, 50, 75, 100].map((y) => (
                <line
                  key={y}
                  x1="10"
                  y1={110 - (y * 0.8)}
                  x2="290"
                  y2={110 - (y * 0.8)}
                  stroke="rgba(150, 224, 114, 0.1)"
                  strokeWidth="1"
                />
              ))}
            </g>
            
            {/* Chart area */}
            <motion.path
              d={chartData}
              fill="url(#chartGradient)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {/* Chart line */}
            <motion.path
              d={chartData}
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
            />
            
            {/* Data points */}
            {supplyData.map((point, index) => {
              const x = (index / (supplyData.length - 1)) * 280 + 10;
              const maxSupply = Math.max(...supplyData.map(d => d.supply));
              const minSupply = Math.min(...supplyData.map(d => d.supply));
              const range = maxSupply - minSupply;
              const y = 110 - ((point.supply - minSupply) / range) * 80;
              
              return (
                <motion.circle
                  key={index}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#96e072"
                  stroke="#e8fccf"
                  strokeWidth="2"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                />
              );
            })}
          </svg>
        </motion.div>
        
        <motion.div 
          className="supply-display"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="supply-label">Current Supply</div>
          <motion.div 
            className="supply-amount"
            key={currentSupply}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {formatSupply(currentSupply)}
          </motion.div>
          <div className="supply-growth">
            <i className="fas fa-arrow-up"></i>
            <span>+15% YoY Growth</span>
          </div>
        </motion.div>
        
        <div className="chart-stats">
          <div className="stat-item">
            <div className="stat-value">$235B</div>
            <div className="stat-label">Total Supply</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">15%</div>
            <div className="stat-label">Annual Growth</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Availability</div>
          </div>
        </div>
        
        <div className="chart-note">
          <i className="fas fa-chart-line"></i>
          <span>Stablecoins provide stability in volatile markets</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StablecoinChart;
