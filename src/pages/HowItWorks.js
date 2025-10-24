import React from 'react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Connect Your Bills',
      description: 'Link your utilities, subscriptions, rent, and other recurring payments to Vuno',
      icon: 'fas fa-link',
      details: [
        'Connect bank accounts and credit cards',
        'Import existing bill payment schedules',
        'Set up new recurring payments',
        'Configure payment preferences'
      ]
    },
    {
      number: 2,
      title: 'Deposit Funds',
      description: 'Add USDC, USDT, or other stablecoins to your Vuno vault',
      icon: 'fas fa-wallet',
      details: [
        'Deposit stablecoins securely',
        'Choose your yield strategy',
        'Set up automatic deposits',
        'Monitor your balance in real-time'
      ]
    },
    {
      number: 3,
      title: 'Earn & Pay',
      description: 'We automatically pay your bills while earning yield on the remaining balance',
      icon: 'fas fa-chart-line',
      details: [
        'Automatic bill payments',
        'Earn yield on idle funds',
        'Real-time earnings tracking',
        'Detailed analytics and reports'
      ]
    }
  ];

  return (
    <div className="how-it-works-page">
      <section className="page-header">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            How Vuno Works
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simple setup, powerful results
          </motion.p>
        </div>
      </section>

      <section className="detailed-steps">
        <div className="container">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              className="step-detail"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="step-header">
                <div className="step-icon">
                  <i className={step.icon}></i>
                </div>
                <div className="step-info">
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                </div>
              </div>
              <div className="step-details">
                <ul>
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
