import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { fetchUSDCVaultData } from '../services/jupiterApi';

const EarnCard = () => {
  const [vaultData, setVaultData] = useState(null);
  const [walletConnected, setWalletConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [depositAmount, setDepositAmount] = useState('');

  // Fetch vault data on component mount
  useEffect(() => {
    const loadVaultData = async () => {
      try {
        setLoading(true);
        const data = await fetchUSDCVaultData();
        setVaultData(data);
        setError(null);
      } catch (err) {
        setError('Failed to load vault data');
        console.error('Error loading vault data:', err);
      } finally {
        setLoading(false);
      }
    };

    loadVaultData();
  }, []);

  // Mock wallet connection
  const connectWallet = () => {
    setWalletConnected(true);
    setWalletAddress('7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU');
  };

  const disconnectWallet = () => {
    setWalletConnected(false);
    setWalletAddress(null);
  };

  const handleDepositClick = () => {
    if (!walletConnected) {
      alert('Please connect your wallet first');
      return;
    }
    setShowDepositModal(true);
  };

  const simulateDeposit = () => {
    alert('Deposit simulation complete! Real functionality coming in next phase.');
    setShowDepositModal(false);
    setDepositAmount('');
  };

  const closeModal = () => {
    setShowDepositModal(false);
    setDepositAmount('');
  };

  if (loading) {
    return (
      <div className="earn-card loading">
        <div className="loading-spinner">
          <i className="fas fa-spinner fa-spin"></i>
          <p>Loading Jupiter vault data...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="earn-card error-state">
        <div className="error-message">
          <i className="fas fa-exclamation-triangle"></i>
          <p>{error}</p>
          <button onClick={() => window.location.reload()} className="retry-btn">
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.div 
        className="earn-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="earn-card-header">
          <div className="vault-icon">
            <i className="fab fa-ethereum"></i>
          </div>
          <div className="vault-info">
            <h3>{vaultData?.name || 'USDC Lending Pool'}</h3>
            <p className="vault-description">Earn yield on your stablecoins via Jupiter</p>
          </div>
        </div>
        
        <div className="earn-card-stats">
          <div className="stat-item">
            <div className="stat-label">APY</div>
            <motion.div 
              className="stat-value apy"
              key={vaultData?.apy || vaultData?.apr}
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 0.3 }}
            >
              {vaultData?.apy || vaultData?.apr}%
            </motion.div>
          </div>
          <div className="stat-item">
            <div className="stat-label">Liquidity</div>
            <div className="stat-value">{vaultData?.liquidity || '$2.5M'}</div>
          </div>
        </div>
        
        <div className="wallet-section">
          {!walletConnected ? (
            <button className="connect-wallet-btn" onClick={connectWallet}>
              <i className="fas fa-wallet"></i>
              <span>Connect Wallet</span>
            </button>
          ) : (
            <div className="wallet-connected">
              <i className="fas fa-wallet"></i>
              <span className="wallet-address">
                {walletAddress?.slice(0, 4)}...{walletAddress?.slice(-4)}
              </span>
              <button onClick={disconnectWallet} className="disconnect-btn">
                Disconnect
              </button>
            </div>
          )}
        </div>
        
        <div className="earn-card-actions">
          <button 
            className={`action-btn deposit-btn ${!walletConnected ? 'disabled' : ''}`}
            onClick={handleDepositClick}
            disabled={!walletConnected}
          >
            <i className="fas fa-arrow-down"></i>
            <span>Deposit</span>
          </button>
          <button 
            className={`action-btn withdraw-btn ${!walletConnected ? 'disabled' : ''}`}
            disabled={!walletConnected}
          >
            <i className="fas fa-arrow-up"></i>
            <span>Withdraw</span>
          </button>
        </div>
      </motion.div>

      {/* Deposit Modal */}
      {showDepositModal && (
        <motion.div 
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div 
            className="modal-content"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3>Jupiter Deposit</h3>
              <button className="modal-close" onClick={closeModal}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <p>Jupiter deposit functionality will be enabled in the next phase.</p>
              <p>This is a preview of the deposit flow.</p>
              <div className="deposit-preview">
                <label>Amount (USDC):</label>
                <input 
                  type="number" 
                  placeholder="100" 
                  className="deposit-amount"
                  value={depositAmount}
                  onChange={(e) => setDepositAmount(e.target.value)}
                />
                <div className="preview-details">
                  <p>Estimated APY: {vaultData?.apy || 13.2}%</p>
                  <p>Estimated Monthly Yield: ~${((parseFloat(depositAmount) || 0) * (vaultData?.apy || 13.2) / 100 / 12).toFixed(2)}</p>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn-secondary" onClick={closeModal}>
                Cancel
              </button>
              <button className="btn-primary" onClick={simulateDeposit}>
                Simulate Deposit
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default EarnCard;
