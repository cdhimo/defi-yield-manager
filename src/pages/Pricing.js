import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      monthlyPrice: 0,
      annualPrice: 0,
      description: 'Perfect for getting started',
      features: [
        'Up to $5,000 in deposits',
        'Basic yield strategies',
        'Email support',
        'Standard automation'
      ],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      monthlyPrice: 9,
      annualPrice: 90,
      description: 'Most popular for serious users',
      features: [
        'Up to $50,000 in deposits',
        'Advanced yield strategies',
        'Priority support',
        'Advanced automation',
        'Analytics dashboard'
      ],
      cta: 'Start Pro',
      popular: true
    }
  ];

  return (
    <div className="pricing-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Simple, Transparent Pricing
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the plan that fits your needs
          </motion.p>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <div className="billing-toggle">
            <span className={!isAnnual ? 'active' : ''}>Monthly</span>
            <div className="switch">
              <input 
                type="checkbox" 
                checked={isAnnual}
                onChange={(e) => setIsAnnual(e.target.checked)}
              />
              <span className="slider"></span>
            </div>
            <span className={isAnnual ? 'active' : ''}>
              Annual
              <span className="discount">Save 17%</span>
            </span>
          </div>

          <div className="pricing-cards">
            {plans.map((plan, index) => (
              <motion.div 
                key={index}
                className={`pricing-card ${plan.popular ? 'featured' : ''}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {plan.popular && <div className="plan-badge">Most Popular</div>}
                
                <div className="plan-header">
                  <h3>{plan.name}</h3>
                  <div className="plan-price">
                    <span className="currency">$</span>
                    {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    <span className="period">/{isAnnual ? 'year' : 'month'}</span>
                  </div>
                  <p className="plan-description">{plan.description}</p>
                </div>

                <div className="plan-features">
                  <ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>
                        <i className="fas fa-check"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="#" className="cta-button">
                  {plan.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;
