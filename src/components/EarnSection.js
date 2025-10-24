import React from 'react';
import { motion } from 'framer-motion';
import EarnCard from './EarnCard';

const EarnSection = () => {
  return (
    <section className="earn-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Earn with Vuno</h2>
          <p className="earn-tagline">Earn yield on your stablecoins via Jupiter</p>
          <EarnCard />
        </motion.div>
      </div>
    </section>
  );
};

export default EarnSection;
