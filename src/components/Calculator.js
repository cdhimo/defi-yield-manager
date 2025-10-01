import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Calculator = () => {
  const [monthlyExpenses, setMonthlyExpenses] = useState(2000);
  const [timeHorizon, setTimeHorizon] = useState(12);
  const [cashBack, setCashBack] = useState(0);
  const [chartData, setChartData] = useState('');

  const APY = 12; // Fixed 12% APY

  useEffect(() => {
    calculateCashBack();
  }, [monthlyExpenses, timeHorizon]);

  const calculateCashBack = () => {
    const monthlyRate = APY / 100 / 12;
    let totalCashBack = 0;
    let currentBalance = monthlyExpenses;
    
    // Calculate exponential growth
    for (let month = 1; month <= timeHorizon; month++) {
      const monthlyEarnings = currentBalance * monthlyRate;
      totalCashBack += monthlyEarnings;
      currentBalance += monthlyExpenses + monthlyEarnings;
    }

    setCashBack(totalCashBack);
    generateChartData(totalCashBack);
  };

  const generateChartData = (maxValue) => {
    const monthlyRate = APY / 100 / 12;
    const points = [];
    let currentBalance = monthlyExpenses;
    let totalEarnings = 0;
    
    for (let month = 0; month <= timeHorizon; month++) {
      const x = (month / timeHorizon) * 280 + 10;
      const y = 110 - (totalEarnings / maxValue) * 100;
      points.push(`${x},${Math.max(y, 10)}`);
      
      if (month < timeHorizon) {
        const monthlyEarnings = currentBalance * monthlyRate;
        totalEarnings += monthlyEarnings;
        currentBalance += monthlyExpenses + monthlyEarnings;
      }
    }
    
    setChartData(`M ${points.join(' L ')}`);
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <motion.div 
      className="hero-calculator"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div className="calculator-widget">
        <h3>Calculate Your Cash Back</h3>
        
        <div className="calc-inputs">
          <div className="input-group">
            <label htmlFor="expensesInput">Monthly Expenses</label>
            <div className="input-wrapper">
              <span className="currency">$</span>
              <input
                type="number"
                id="expensesInput"
                value={monthlyExpenses}
                onChange={(e) => setMonthlyExpenses(parseInt(e.target.value) || 0)}
                min="100"
                max="50000"
                step="100"
                placeholder="Enter amount"
              />
            </div>
          </div>
          
          <div className="input-group">
            <label htmlFor="timeSlider">How long will you use LoopFi?</label>
            <div className="slider-container">
              <input
                type="range"
                id="timeSlider"
                min="1"
                max="24"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(parseInt(e.target.value))}
                className="slider"
              />
              <div className="slider-value">
                <span>{timeHorizon}</span> months
              </div>
            </div>
          </div>
        </div>
        
        <motion.div 
          className="simple-chart"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="chart-container">
            <svg width="100%" height="120" viewBox="0 0 300 120">
              <defs>
                <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#1d4ed8', stopOpacity:0.8}} />
                  <stop offset="100%" style={{stopColor:'#1d4ed8', stopOpacity:0.2}} />
                </linearGradient>
              </defs>
              <motion.path
                d={chartData}
                fill="url(#chartGradient)"
                stroke="#1d4ed8"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </svg>
          </div>
        </motion.div>
        
        <motion.div 
          className="cash-back-result"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="cash-back-label">Total Cash Back</div>
          <motion.div 
            className="cash-back-amount"
            key={cashBack}
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {formatCurrency(cashBack)}
          </motion.div>
        </motion.div>
        
        <div className="calc-note">
          <i className="fas fa-chart-line"></i>
          <span>Earn 12% APY on your monthly expenses</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Calculator;
