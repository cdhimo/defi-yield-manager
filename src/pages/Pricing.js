import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  return (
    <div className="pricing-page">
      {/* Header Section */}
      <section className="hero-section">
        <div className="container">
          <motion.h1 
            className="page-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Simple, transparent pricing
          </motion.h1>
          <motion.p 
            className="page-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Earn more, automate payments, no hidden fees.
          </motion.p>
          
          {/* Trust Strip */}
          <motion.div 
            className="trust-strip"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="trust-items">
              <span>🔒 Bank-grade encryption</span>
              <span>💸 Withdraw anytime</span>
              <span>📊 Transparent yield</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Panels */}
      <section className="pricing-content">
        <div className="container">
          <div className="pricing-grid">
            {/* Starter Card */}
            <motion.div 
              className="pricing-card starter-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="card-header">
                <h3 className="plan-name">Starter</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">0</span>
                  <span className="period">/ month</span>
                </div>
                <p className="description">Perfect for individuals getting started.</p>
              </div>
              
              <div className="features">
                <ul>
                  <li>✅ Up to $5,000 deposits</li>
                  <li>✅ Standard yield vaults</li>
                  <li>✅ Email support</li>
                  <li>✅ Basic analytics</li>
                </ul>
              </div>
              
              <button className="cta-button starter-cta">Start Free</button>
            </motion.div>

            {/* Pro Card - Highlighted */}
            <motion.div 
              className="pricing-card pro-card featured"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="featured-badge">Most Popular</div>
              <div className="card-header">
                <h3 className="plan-name">Pro</h3>
                <div className="price">
                  <span className="currency">$</span>
                  <span className="amount">9</span>
                  <span className="period">/ month</span>
                </div>
                <p className="description">For power users automating yield and bills.</p>
              </div>
              
              <div className="features">
                <ul>
                  <li>✅ Up to $50,000 deposits</li>
                  <li>✅ Advanced yield vaults</li>
                  <li>✅ Priority support</li>
                  <li>✅ Automation rules</li>
                  <li>✅ Analytics dashboard</li>
                </ul>
              </div>
              
              <button className="cta-button pro-cta">Upgrade to Pro</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="enterprise-section">
        <div className="container">
          <motion.div 
            className="enterprise-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h3>Need higher limits or API access?</h3>
            <div className="enterprise-buttons">
              <button className="cta-button primary">Get a Quote</button>
              <button className="cta-button secondary">Book a Demo</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <motion.div 
            className="testimonial-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <blockquote className="testimonial-quote">
              "Vuno helps me earn yield while paying bills automatically."
            </blockquote>
            <div className="testimonial-author">
              <span className="author-name">Alex M.</span>
              <span className="author-role">Early Beta User</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partner Logos */}
      <section className="partner-logos-section">
        <div className="container">
          <motion.div 
            className="partner-logos"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <h4>Trusted by partners</h4>
            <div className="logos-grid">
              <div className="logo-item">Solana</div>
              <div className="logo-item">Circle</div>
              <div className="logo-item">Plaid</div>
              <div className="logo-item">Jupiter</div>
              <div className="logo-item">Accenture</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;