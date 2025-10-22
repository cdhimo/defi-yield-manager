import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Calculator from '../components/Calculator';
import EarnSection from '../components/EarnSection';

const Home = () => {
  const stats = [
    { number: '12-25%', label: 'Annual Yield' },
    { number: '$0', label: 'Setup Fees' },
    { number: '24/7', label: 'Auto-Pay' }
  ];

  const comparisonData = [
    {
      type: 'traditional',
      title: 'Traditional Banking',
      icon: 'fas fa-university',
      features: [
        { text: '0.01% interest on checking', positive: false },
        { text: 'Manual bill payments', positive: false },
        { text: 'Hidden fees everywhere', positive: false },
        { text: 'No yield on idle money', positive: false }
      ]
    },
    {
      type: 'modern',
      title: 'LoopFi DeFi',
      icon: 'fas fa-rocket',
      features: [
        { text: '12-25% APY on deposits', positive: true },
        { text: 'Automated bill payments', positive: true },
        { text: 'Transparent, low fees', positive: true },
        { text: 'Money works while you sleep', positive: true }
      ]
    }
  ];

  const steps = [
    {
      number: 1,
      title: 'Connect Your Bills',
      description: 'Link your utilities, subscriptions, rent, and other recurring payments to LoopFi'
    },
    {
      number: 2,
      title: 'Deposit Funds',
      description: 'Add USDC, USDT, or other stablecoins to your LoopFi vault'
    },
    {
      number: 3,
      title: 'Earn & Pay',
      description: 'We automatically pay your bills while earning yield on the remaining balance'
    }
  ];

  const features = [
    {
      icon: 'fas fa-shield-alt',
      title: 'Bank-Grade Security',
      description: 'Built on Solana blockchain with audited smart contracts. Your funds are always under your control.'
    },
    {
      icon: 'fas fa-bolt',
      title: 'Instant Automation',
      description: 'Never miss a payment again. LoopFi handles all your bills automatically while earning yield.'
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Transparent Returns',
      description: 'Real-time tracking of your earnings with detailed analytics and performance metrics.'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-modern">
        <div className="hero-background">
          <div className="floating-elements">
            <div className="float-element" style={{'--delay': '0s', '--duration': '6s'}}></div>
            <div className="float-element" style={{'--delay': '2s', '--duration': '8s'}}></div>
            <div className="float-element" style={{'--delay': '4s', '--duration': '7s'}}></div>
          </div>
        </div>
        
        <div className="container">
          <div className="hero-content">
            <motion.div 
              className="hero-text"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="hero-title">
                Turn Your Monthly Bills Into
                <span className="gradient-text"> Passive Income</span>
              </h1>
              <p className="hero-description">
                LoopFi is the first DeFi app that automatically pays your bills while earning yield on your money. 
                Think of it as a high-yield checking account with smart autopay - your expenses become your income stream.
              </p>
              
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index}
                    className="stat-item"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  >
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
              
              <div className="hero-cta">
                <Link to="/contact" className="cta-primary">
                  <span>Get Early Access</span>
                  <i className="fas fa-arrow-right"></i>
                </Link>
                <Link to="/how-it-works" className="cta-secondary">
                  <i className="fas fa-play"></i>
                  <span>See How It Works</span>
                </Link>
              </div>
            </motion.div>
            
            <Calculator />
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="value-prop">
        <div className="container">
          <div className="section-header">
            <h2>Why LoopFi Changes Everything</h2>
            <p>Traditional banking vs. DeFi innovation</p>
          </div>
          
          <div className="comparison-grid">
            {comparisonData.map((item, index) => (
              <motion.div 
                key={index}
                className={`comparison-item ${item.type === 'modern' ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="comparison-header">
                  <div className={`icon ${item.type}`}>
                    <i className={item.icon}></i>
                  </div>
                  <h3>{item.title}</h3>
                </div>
                <ul className="comparison-list">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className={`fas ${feature.positive ? 'fa-check' : 'fa-times'}`}></i>
                      {feature.text}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-modern">
        <div className="container">
          <div className="section-header">
            <h2>How LoopFi Works</h2>
            <p>Simple setup, powerful results</p>
          </div>
          
          <div className="steps-flow">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div 
                  className="step-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="step-number">{step.number}</div>
                  <div className="step-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </motion.div>
                {index < steps.length - 1 && (
                  <div className="step-arrow">
                    <i className="fas fa-arrow-right"></i>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-modern">
        <div className="container">
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
              >
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Earn Section */}
      <EarnSection />

      {/* CTA Section */}
      <section className="cta-modern">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Turn Your Expenses Into Income?</h2>
            <p>Join the waitlist and be among the first to experience the future of personal finance</p>
            <div className="cta-buttons">
              <Link to="/contact" className="cta-button primary">
                <i className="fas fa-envelope"></i>
                <span>Get Early Access</span>
              </Link>
              <Link to="/pricing" className="cta-button secondary">
                <i className="fas fa-star"></i>
                <span>View Pricing</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
